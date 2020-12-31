import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQChiCY0i_dNqkKe4ymUSdY78i4bZlXhRdTOgrlDue6JVGQ_mbdtaqmA_eBso2MnobA9F3q-XtErHQ4DJ8w'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .pipe( map( data => {
        return data['albums'].items;
      }));
  }

  getArtista(termino: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQChiCY0i_dNqkKe4ymUSdY78i4bZlXhRdTOgrlDue6JVGQ_mbdtaqmA_eBso2MnobA9F3q-XtErHQ4DJ8w'
    });

    return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&offset=0&limit=15`, { headers })
    .pipe( map( data => {
      return data['artists'].items;
    }))
    //return this.http.get(`https://api.spotify.com/v1/search?query=metallica&type=artist&offset=0&limit=15`, { headers });
  }
}
