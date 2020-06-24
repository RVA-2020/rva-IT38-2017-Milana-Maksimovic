import { ProizvodjacService } from './../../../services/proizvodjac.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Proizvodjac } from 'src/app/models/proizvodjac';

@Component({
  selector: 'app-proizvodjac-dialog',
  templateUrl: './proizvodjac-dialog.component.html',
  styleUrls: ['./proizvodjac-dialog.component.css']
})
export class ProizvodjacDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<ProizvodjacDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Proizvodjac,
              public proizvodjacService: ProizvodjacService) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.data.id = -1;
    this.proizvodjacService.addProizvodjac(this.data);
    this.snackBar.open('Uspešno dodat proizvodjac: ' + this.data.naziv, 'U redu', { duration: 2500 });
  }

  public update(): void {
    this.proizvodjacService.updateProizvodjac(this.data);
    this.snackBar.open('Uspešno modifikovan proizvodjac: ' + this.data.id, 'U redu', { duration: 2500 });
  }

  public delete(): void {
    this.proizvodjacService.deleteProizvodjac(this.data.id);
    this.snackBar.open('Uspešno obrisan proizvodjac: ' + this.data.id, 'U redu', { duration: 2500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu', { duration: 1000 });
  }

}
