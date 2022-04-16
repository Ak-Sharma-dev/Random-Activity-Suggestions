import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class gettingRandomActivity{

  constructor(public activity : string, public type : string){}

}

@Injectable({
  providedIn: 'root'
})

export class DisplayActivityService {

  constructor(private http : HttpClient) { }

  getActivity(){
    return this.http.get<gettingRandomActivity>(`https://www.boredapi.com/api/activity`);
  }

}
