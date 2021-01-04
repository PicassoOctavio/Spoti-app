import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query: string ){
    const URL = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAZTcXbQyHjpetCgmYPxfo8S4AfF2OZmSVhZyfx_aKd_6pe3Fs-5i-LQUWlj_YMXD6Erg_5ccwAuDKX-Vs'
    });

    return this.http.get( URL, { headers });
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases').pipe( map( (data: any) => data['albums'].items));
  }

  getArtistas(termino: string){
    return this.getQuery(`search?query=${ termino }&type=artist&offset=0&limit=15`).pipe( map( (data: any) => 
      data['artists'].items));

/*     return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=15`, { headers })
    .pipe( map( data => {
      return data['artists'].items;
    })) */
  }

  getArtista(id: string){
    return this.getQuery(`artists/${ id }`);
  }
  
  getTopTracks( id: string){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`);
    
  }

}
