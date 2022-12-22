import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class NeptunesPrideService {
  apiRoot = 'http://localhost:4201/';

  constructor(private http: HttpClient) {
  }

  getData(): Observable<any> {
    return this.http.get(this.apiRoot);
  }
}
