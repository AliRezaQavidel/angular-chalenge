import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getNumbersJson(): Observable<any> {
    return this.http.get('assets/json/Numbers.json')
  }

  async getAddJson() {
    const res = await this.http.get('assets/json/Add.json').toPromise();
    return res;
  }
  
  async getMultiplyJson(): Promise<any> {
    const res = await this.http.get('assets/json/Multiply.json').toPromise()
    .then(response => JSON.parse(JSON.stringify(response)));
    return res;
  }
  
}
