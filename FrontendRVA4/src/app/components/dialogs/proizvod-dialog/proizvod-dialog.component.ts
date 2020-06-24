import { ProizvodjacService } from './../../../services/proizvodjac.service';
import { Proizvodjac } from 'src/app/models/proizvodjac';
import { ProizvodService } from './../../../services/proizvod.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Proizvod } from 'src/app/models/proizvod';

@Component({
  selector: 'app-proizvod-dialog',
  templateUrl: './proizvod-dialog.component.html',
  styleUrls: ['./proizvod-dialog.component.css']
})
export class ProizvodDialogComponent implements OnInit {

  proizvodjaci: Proizvodjac [];

  public flag: number;

  constructor(public proizvodService: ProizvodService,
              public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<ProizvodDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Proizvod,
              public proizvodjacService: ProizvodjacService) { }

  ngOnInit(): void {

    this.proizvodjacService.getAllProizvodjac().subscribe(proizvodjaci =>
      this.proizvodjaci = proizvodjaci);

  }

  compareTo(a,b){
    return a.id == b.id;
  }

  // Slucajevi buttona Potvrdi


  public add(): void {
    this.data.id = 0;
    this.proizvodService.addProizvod(this.data);
    this.snackBar.open('Uspešno dodat proizvod: ' + this.data.naziv, 'U redu', {
      duration: 2500
    });
  }

  public update(): void {

    this.proizvodService.updateProizvod(this.data);
    this.snackBar.open('Uspešno modifikovan proizvod: ' + this.data.naziv, 'U redu', {
      duration: 2500
    });
  }

  public delete(): void {
    this.proizvodService.deleteProizvod(this.data.id);
    this.snackBar.open('Uspešno obrisan proizvod: ' + this.data.naziv, 'U redu', {
      duration: 2500
    });
  }

  // Button Odustani

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste', 'U redu', {
      duration: 1000
    });
  }

}
