import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DemoService {

  constructor(private _http: Http) { }

  callRedditApi() {
    return this._http.get('https://uinames.com/api/?amount=25')
      .map((res: Response) => res.json());
  }

}