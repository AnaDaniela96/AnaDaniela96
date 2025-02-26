import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cards = [
    {
      title: 'Card 1',
      body: 'Este es el contenido de la primera tarjeta.',
      link: 'https://example.com/card1'
    },
    {
      title: 'Card 2',
      body: 'Descripción de la segunda tarjeta.',
      link: 'https://example.com/card2'
    },
    {
      title: 'Card 3',
      body: 'Texto de la tercera tarjeta.',
      link: 'https://example.com/card3'
    }
  ];
}
