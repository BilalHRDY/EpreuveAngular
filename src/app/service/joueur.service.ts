import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Observable, throwError} from "rxjs";
import { HttpClient } from '@angular/common/http';

import {catchError, retry} from 'rxjs/internal/operators'
import { Joueur } from '../class/joueur';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

apiUrl = environment.apiUrl + "/joueurs";


  constructor(private httpClient: HttpClient) { }

getAll(): Observable<Joueur[]>{

  return this.httpClient.get<Joueur[]>(this.apiUrl).pipe(retry(1), catchError(this.errorHandler))
}

getOne(id: number): Observable<Joueur>{
  return this.httpClient.get<Joueur>(this.apiUrl + '/' + id).pipe(retry(1), catchError(this.errorHandler))
}

add(joueur: Joueur): Observable<Joueur>{
  return this.httpClient.post(this.apiUrl, joueur).pipe(retry(1), catchError(this.errorHandler))
}


delete(id: number){
  return this.httpClient.delete(this.apiUrl+ '/' + id).pipe(retry(1), catchError(this.errorHandler))
}

errorHandler(error: any){
  let errorMessage = '';
  if(error.error instanceof ErrorEvent){
    errorMessage = error.error.message;
  } else {
    errorMessage = 'Error Code : ' +
      error.statut + ' message :' + error.message
  }

  window.alert(errorMessage);
  return throwError(errorMessage)
}

}