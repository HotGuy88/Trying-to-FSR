import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class ConfigService {

  constructor(public http : HttpClient) { }

  login(value: any){
    return this.http.post('localhost:4401', value, {withCredentials:true})
  }
}
