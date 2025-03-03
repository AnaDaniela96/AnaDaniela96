import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-contact',
  imports: [HeaderComponent, CommonModule, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_muqbgll', 'template_mensajeNuevo', e.target as HTMLFormElement, {
        publicKey: 'waQBOhbn0BCA5GIrA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Correo enviado con éxito 📩');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
          alert('Error al enviar el correo ❌');
        },
      );
  }
}
