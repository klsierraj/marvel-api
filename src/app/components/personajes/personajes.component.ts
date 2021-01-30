import { Component, OnInit } from '@angular/core';
import { HeroesMarvelService } from '../../services/heroes-marvel.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  p: number = 1;
    constructor(
    private _characterService: HeroesMarvelService,
    private _comicService: HeroesMarvelService,
  ) { }
  allCharacters: Observable<any>
  allComics: Observable<any>

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters () {
    this.allCharacters = this._characterService.getAllCharacters();
  }
  getComics () {
    this.allComics = this._comicService.getAllComics();
  }

}
