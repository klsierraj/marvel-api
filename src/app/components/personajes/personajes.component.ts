import { Component, OnInit } from '@angular/core';
import { HeroesMarvelService } from '../../services/heroes-marvel.service';
import { Observable } from 'rxjs';
import { ComponentFixture } from '@angular/core/testing';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  
  comicsGuardados: Array<any>
  p: number = 1;
  public favourites: any[] = [];
    constructor(
    private _characterService: HeroesMarvelService,
    private _comicService: HeroesMarvelService,
  ) { }


  allCharacters: Observable<any>
  allComics: Observable<any>

  ngOnInit(): void {
    this.getCharacters();
   this.guardarComic(1886, 2);
  }

  getCharacters () {
    this.allCharacters = this._characterService.getAllCharacters();
  }
  getComics () {
    this.allComics = this._comicService.getAllComics();
  }

  guardarComic (id:number, content:any) {
    localStorage.setItem( id + '_id', JSON.stringify(content));
    this.favourites = [];
    Object.values(localStorage).forEach((e: any, i) => {
      this.favourites.push(JSON.parse(e));
    });
    console.log(this.favourites);

  }

}
