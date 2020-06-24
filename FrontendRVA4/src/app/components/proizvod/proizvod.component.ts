import { Proizvodjac } from './../../models/proizvodjac';
import { MatDialog } from '@angular/material/dialog';
import { ProizvodService } from './../../services/proizvod.service';
import { Proizvod } from './../../models/proizvod';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProizvodDialogComponent } from '../dialogs/proizvod-dialog/proizvod-dialog.component';

@Component({
  selector: 'app-proizvod',
  templateUrl: './proizvod.component.html',
  styleUrls: ['./proizvod.component.css']
})
export class ProizvodComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'proizvodjac', 'actions'];
  dataSource: MatTableDataSource<Proizvod>;


  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(public proizvodService: ProizvodService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData() {
    this.proizvodService.getAllProizvod().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

       // pretraga po nazivu ugnježdenog objekta
     this.dataSource.filterPredicate = (data, filter: string) => {
      const accumulator = (currentTerm, key) => {
        return key === 'proizvodjac' ? currentTerm + data.proizvodjac.naziv : currentTerm + data[key];
      };
      const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) !== -1;
    };

     // sortiranje po nazivu ugnježdenog objekta
    this.dataSource.sortingDataAccessor = (data, property) => {
      switch (property) {
        case 'proizvodjac': return data.proizvodjac.naziv.toLocaleLowerCase();
        default: return data[property];
      }
    };

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  public openDialog(flag: number, id?: number, naziv?: string, proizvodjac?: Proizvodjac) {
    const dialogRef = this.dialog.open(ProizvodDialogComponent,
       { data: { id, naziv, proizvodjac} });

    dialogRef.componentInstance.flag = flag;

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  applyFilter (filterValue: string) {
    filterValue= filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

}
