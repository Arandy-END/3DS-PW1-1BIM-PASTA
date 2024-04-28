import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {

  nome: string = "Cadreel";
  imagem: string = "favicon.ico";
  numero1: number = 34;
  numero2: number = 35;
}
