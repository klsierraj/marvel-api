import { Component, OnInit } from '@angular/core';
import { HeroesMarvelService } from '../../services/heroes-marvel.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  heroes: any;
  prev_page: number;
  next_page: number;
  total_pages: any;
  actualpage: number;
  constructor(
    private _characterService: HeroesMarvelService
  ) { }
  allCharacters: Observable<any>

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters () {
    this.allCharacters = this._characterService.getAllCharacters();
  }

}
