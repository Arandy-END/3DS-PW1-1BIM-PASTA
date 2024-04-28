import { Component } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent {
  professores: any[] = [{"nome":"Marion", "favorito": true},
  {"nome":"Rogerio", "favorito": false},
  {"nome":"Marcao", "favorito": false},
  {"nome":"Guilherme", "favorito": true},
  ];


}
