import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.css']
})
export class FraseComponent {
  @Input() visivel : boolean = true;
  @Input() min: number = 0;
  @Input() max: number = 10;
  @Output() frases: Array<string>=['Futuro doce revelado','Segredos deliciosos desvendados', 'Um toque de sorte em cada biscoito', 'Pequeno tesouro de inspiração', 'Sabor e sabedoria em um só pacote', 'Doce mistério revelado', 'Fortuna em forma de cookie', 'Mensagem oculta em cada mordida', 'O doce que traz sorte e inspiração', 'Sorte em palavras doces'];
  @Output() frase: number = Math.floor(Math.random()*(this.max - this.min + 1)) + this.min;


}

