import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }


    getEpisodes() {
        return this.http.get('https://mysterious-wildwood-57639.herokuapp.com/api/episodes');
    }

    getEpisode(id) {
        return this.http.get(`https://mysterious-wildwood-57639.herokuapp.com/api/episodes/${id}`);
    }

     getCharacters() {
        return this.http.get('https://mysterious-wildwood-57639.herokuapp.com/api/characters');
    }

    getCharacter(id) {
        return this.http.get(`https://mysterious-wildwood-57639.herokuapp.com/api/characters/${id}`)
    }

     getQuotes() {
        return this.http.get('https://mysterious-wildwood-57639.herokuapp.com/api/quotes');
    }

    getQuote(id) {
        return this.http.get(`https://mysterious-wildwood-57639.herokuapp.com/api/quote/${id}`);
    }

     getDeaths() {
        return this.http.get('https://mysterious-wildwood-57639.herokuapp.com/api/deaths');
    }

    getDeath(id) {
        return this.http.get(`https://mysterious-wildwood-57639.herokuapp.com/api/death/${id}`);
    }

}