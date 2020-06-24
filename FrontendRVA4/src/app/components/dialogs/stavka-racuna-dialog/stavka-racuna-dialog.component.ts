import { ProizvodService } from './../../../services/proizvod.service';
import { StavkaRacunaService } from 'src/app/services/stavka-racuna.service';
import { StavkaRacuna } from 'src/app/models/stavka-racuna';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Proizvod } from 'src/app/models/proizvod';
import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-stavka-racuna-dialog',
  templateUrl: './stavka-racuna-dialog.component.html',
  styleUrls: ['./stavka-racuna-dialog.component.css']
})
export class StavkaRacunaDialogComponent implements OnInit {

  proizvodi: Proizvod[];
  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<StavkaRacunaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: StavkaRacuna,
              public stavkaRacunaService: StavkaRacunaService,
              public proizvodService: ProizvodService) { }

  ngOnInit(): void {
    this.proizvodService.getAllProizvod().subscribe(proizvodi =>
      this.proizvodi = proizvodi
    );
  }

  public add(): void {
    this.data.id = -1;
    this.stavkaRacunaService.addStavkaRacuna(this.data);
    this.snackBar.open('Uspešno dodata stavka racuna', 'U redu', { duration: 2500 });
  }

  public update(): void {
    this.stavkaRacunaService.updateStavkaRacuna(this.data);
    this.snackBar.open('Uspešno modifikovana stavka racuna', 'U redu', { duration: 2500 });
  }

  public delete(): void {
    this.stavkaRacunaService.deleteStavkaRacuna(this.data.id);
    this.snackBar.open('Uspešno obrisana stavka racuna', 'U redu', { duration: 2000 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu', { duration: 1000 });
  }

  compareTo(a, b) {
    return a.id === b.id;
  }

}
