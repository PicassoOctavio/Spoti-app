import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})

export class ArtistaComponent{

  artista: any = {};
  loading: boolean = false;
  topTracks: any = {};

  constructor( private _router: ActivatedRoute,
                private _spotifyService: SpotifyService) {

    this._router.params.subscribe( params => {
      console.log( params['id']);

      this.getArtista( params['id'] );
      this.getTopTracks( params['id'] );
      this.loading = true;

    })


   }

   getArtista( id: string ){
      this._spotifyService.getArtista( id )
        .subscribe( data =>{
          //console.log(data);
          this.artista = data;
          this.loading = false;
        });

   }

   getTopTracks( id: string ){
     this._spotifyService.getTopTracks( id ) 
      .subscribe ( data => {
        console.log(data);
        this.topTracks = data;
        console.log('top', this.topTracks);
      })

   }



}
