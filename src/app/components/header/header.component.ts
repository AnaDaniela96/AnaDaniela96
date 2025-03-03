import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [ CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 // Propiedad de entrada para el color de fondo
 @Input() backGroundColor: string = 'transparent';
}
