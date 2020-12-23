import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }


  login() {
    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`);
  }


}
