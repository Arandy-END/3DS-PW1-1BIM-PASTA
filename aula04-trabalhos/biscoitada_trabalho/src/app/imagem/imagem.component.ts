import { Component } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent {

  quebra: boolean = false
  imagem: string="assets/biscoito.png"
  bot: string="quebrar biscoito"

  trocar() {

    if (this.quebra == false) {
      this.imagem = "assets/biscoito-quebrado.png"
      this.quebra = true;
      this.bot = "reconstruir biscoito"
    }

    else {
      this.imagem = "assets/biscoito.png"
      this.quebra = false;
      this.bot = "quebrar biscoito";

    }
  }
}
