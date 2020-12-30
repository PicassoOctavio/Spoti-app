import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA3RRh-yCKi-jFynJG2K6bIGUCiinLZ-edTGfzCDfNRDR3NLEw43hzc8FUl74gxeludx6PSnfNgCj6Y9BU'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
