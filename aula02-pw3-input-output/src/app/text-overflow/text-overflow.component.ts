import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-overflow',
  templateUrl: './text-overflow.component.html',
  styleUrls: ['./text-overflow.component.css']
})
export class TextOverflowComponent {
  @Input() clip : boolean = false;

  @Input() textofoda : string = "Este é um texto muito longo que não cabe na caixa";

  @Input() titulo : string = "text-overflow: overflow";
}
