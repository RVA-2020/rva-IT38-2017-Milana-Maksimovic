import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StavkaRacuna } from '../models/stavka-racuna';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StavkaRacunaService {

  private readonly API_URL = 'http://localhost:8083/stavkaRacuna/';
  private readonly API_URL_BYID = 'http://localhost:8083/stavkeZaRacunId/';

  dataChange: BehaviorSubject<StavkaRacuna[]> = new BehaviorSubject<StavkaRacuna[]>([]);

  constructor(private httpClient: HttpClient) { }


  public getStavkeZaRacun(idRacuna: number): Observable<StavkaRacuna[]> {
    this.httpClient.get<StavkaRacuna[]>(this.API_URL_BYID + idRacuna).subscribe(data => {
      this.dataChange.next(data);
    },
      (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      });
    return this.dataChange.asObservable();
  }

  public addStavkaRacuna(stavkaRacuna: StavkaRacuna): void {
    this.httpClient.post(this.API_URL, stavkaRacuna).subscribe();
  }

  public updateStavkaRacuna(stavkaRacuna: StavkaRacuna): void {
    this.httpClient.put(this.API_URL, stavkaRacuna).subscribe();
  }

  public deleteStavkaRacuna(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
