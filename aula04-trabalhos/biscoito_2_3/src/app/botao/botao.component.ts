import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent {

  @Input() botaover : boolean = true;
  @Output() botao1: string = 'botao';
  @Output() botao2: string = 'secundario';
}
