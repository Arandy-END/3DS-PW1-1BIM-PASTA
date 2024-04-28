import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.css']
})
export class Exercicio1Component {

  ocutar: boolean = false;
  palavra: string = "kiwii";
  bot: string = "esconder"


  esconder() {

    if (this.ocutar == false) {
      this.ocutar = true;
      this.bot = "mostrar"
    }

    else {
      this.ocutar = false;
      this.bot = "esconder";

    }
  }


}
