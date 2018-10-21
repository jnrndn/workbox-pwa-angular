import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RickNMortyService {

  baseUrl: string = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) { }

  getCharacteres() {
    const endpoint = 'character/';

    return this.http.get(`${this.baseUrl}${endpoint}`).pipe(
      map((x: IapiResponse) => x.results),
    );
  }
}

interface IapiResponse {
  info: {};
  results: {};
}
