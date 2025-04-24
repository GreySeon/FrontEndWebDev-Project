import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private httpClient: HttpClient) { }

  getEvents(): Observable<any> {
    return this.httpClient.get('https://mocki.io/v1/95eeca4e-3c81-4dd8-9ffe-da12eee5d759'); // http request
  }
}
