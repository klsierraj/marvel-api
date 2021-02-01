import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Injectable({
  providedIn: 'root'
})
export class HeroesMarvelService {

  PUBLIC_KEY = 'afb439ad4156e2931c64c0f64f1a7f80';
  HASH = '46bd72091ff8b614c9b6a4387f6a158c';
  URL_API  = `https:gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&limit=100&offset=0`;
  URL_COMICS = `https:gateway.marvel.com:443/v1/public/comics?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&limit=100&offset=0`;
  constructor(private http: HttpClient) {
  
  }

    getAllCharacters(): Observable<any> {
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any) => data.data.results))
  }

 
 
  getAllComics(): Observable<any> {
    return this.http.get<any>(this.URL_COMICS)
    .pipe(map((data: any) => data.data.results))
  }
  
}
