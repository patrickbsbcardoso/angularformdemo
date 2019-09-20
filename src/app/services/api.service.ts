import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ModeloFormulario } from '../modelo-formulario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVIDOR_API_PHP = 'http://localhost:8000';

  cadastraFormulario(modeloFormulario: ModeloFormulario): Observable<ModeloFormulario> {
    return this.http.post<ModeloFormulario>(`${this.SERVIDOR_API_PHP}/api/insert.php`, modeloFormulario)
    .pipe(
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  constructor(
    private http: HttpClient
  ) { }
}
