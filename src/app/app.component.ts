import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RickNMortyService, Result } from './services/rick-n-morty.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
  characteres$: Observable<Result[]>;

  constructor(private ricknmorty: RickNMortyService) { }

  ngOnInit() {
    this.characteres$ = this.ricknmorty.getCharacteres();
  }
}
