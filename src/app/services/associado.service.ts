import { environment } from './../../environments/environment.prod';
import { Associado } from 'src/app/models/associado';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSnackBar} from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class AssociadoService {

  baseUrl = 'http://localhost:8081/api/v1/associados';
  httpOptions = {
    headers : new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Basic ' + btoa('admin:123')
    })
  };

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  getAll(): Observable<Associado[]> {
    return this.http.get<Associado[]>(this.baseUrl, this.httpOptions);
  }

  editAssociado(): Observable<Associado> {
    return this.http.put<Associado>(this.baseUrl, this.httpOptions);
  }

  deleteAssociado(id: any): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url, this.httpOptions);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, "OK", {
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 4000,
    });
  }
}
