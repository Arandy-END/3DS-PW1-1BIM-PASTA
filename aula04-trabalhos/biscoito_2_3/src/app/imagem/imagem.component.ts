//Dupla: Endy Kaori Yara Villalva, Gabriella Silva
import { Component } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent {

  imagem: string="assets/biscoito.png"

  restaurar() {
      this.imagem = "assets/biscoito.png"
  }
  quebrar() {
      this.imagem = "assets/biscoito-quebrado.png"
  }
  
}
