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
      map((x: ApiResponse) => x.results),
    );
  }
}

export interface ApiResponse {
  info: {};
  results: Result[];
}

export interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginOrLocation;
  location: OriginOrLocation;
  image: string;
  episode?: string[] | string;
  url: string;
  created: string;
}
export interface OriginOrLocation {
  name: string;
  url: string;
}
