import { Component, OnInit } from '@angular/core';
import { HeroesMarvelService } from '../../services/heroes-marvel.service';
import { Observable } from 'rxjs';
import { Key } from 'protractor';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  public personajes: any;
  public onlyComic: any;
  public comicR: any;
  public randonComics: any;
  public favoritos: any[] = [];
  p: number = 1;
    constructor(
    private _characterService: HeroesMarvelService,

  ) { }


  allCharacters: Observable<any>
  allComics: Observable<any>

  ngOnInit(): void {
    this.getCharacters();     
   this.getComics();

   //Recorrer LocalStorage 
   Object.values(localStorage).forEach((key)=> {
    this.favoritos.push(JSON.parse(key));
   })
  }


  getCharacters () {
    this.allCharacters = this._characterService.getAllCharacters();
  }
  
  getComics () {
    this.allComics = this._characterService.getAllComics();
  }

  

  guardarFavorito(id:number, content:any){
    
    localStorage.setItem(  id + '', JSON.stringify(content));
    this.favoritos = [];
   Object.values(localStorage).forEach((key)=> {
    this.favoritos.push(JSON.parse(key));
   })


  }

  
eliminarFavoritos(id: number) {
  localStorage.removeItem(id + '');
  this.favoritos = [];
  Object.values(localStorage).forEach((key) => {
    this.favoritos.push(JSON.parse(key));
    
  })

  
  
  
}
randomComics() {
  this._characterService.getAllComics().subscribe(response => {
   this.randonComics = response;

    for(let i = 0; i <= 1; i++) {
      var comicAzar = this.randonComics[Math.floor(Math.random()*this.randonComics.length)];
      this.guardarFavorito(comicAzar.id, comicAzar)

    }

});

}
    

  
 


}
