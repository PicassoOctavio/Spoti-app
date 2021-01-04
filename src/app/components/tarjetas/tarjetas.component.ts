import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent{


  @Input() items: any[] = [];
  
  constructor(private _router: Router) { }

  verArtista( item: any){
    console.log(item);

    let artistId;
    if (item.type === 'artist'){
      artistId = item.id; 
    } else{
      artistId = item.artists[0].id;
    }
    
    this._router.navigate(['/artist', artistId]); //así redirijo la navegacion
  }


}
