import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TradiesService {
  private apiUrl = 'https://block2-api-dev.azurewebsites.net/free-view/trades';
  private apiUrl2 = 'https://block2-api-dev.azurewebsites.net/free-view/find-tradie';

  constructor(private http: HttpClient) { }

  getTrades(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(response => response.filter(trade => trade.subTrade.length > 0)),
      catchError(error => {
        console.error('An error occurred:', error);
        throw error;
      })
    );
  }

  findTrades(obj: any): Observable<any[]> {
    return this.http.post<any[]>(this.apiUrl2, obj).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        throw error;
      })
    );
  }
}
