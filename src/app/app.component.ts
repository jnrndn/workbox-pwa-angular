import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RickNMortyService } from './services/rick-n-morty.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
  characteres$: Observable<any>;

  constructor(private ricknmorty: RickNMortyService) { }

  ngOnInit() {
    this.characteres$ = this.ricknmorty.getCharacteres();
  }
}
