import { Pessoa } from './pessoa';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private url = 'api/pessoas';

  constructor(
    private http: HttpClient
  ) { }

  getPessoas (): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.url);
  }


}
