import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CommonModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  cardsProyects = [
    // {
    //   title: 'AMCCE',
    //   body: 'AMCCE es una plataforma para amantes del café. En este sitio mi trabajo fue rediseñar el proyecto basandome en la experiencia de los usuarios, agregar carruseles, integrar mapas y sobre todo enfocarme en cuidar la imagen de la marca y su estrategía comercial.',
    //   link: 'https://www.amcce.org/'
    // },
    {
      title: 'DependeBlog',
      body: 'Aquí escribo sobre temas diversos, comparto el contenido de los guiones, parte de mis lecturas, reseñas de películas o libros y cualquier cosa que no sepa donde guardar. Usé REACT como framework y lo conectó con mi bd que por ahora se renderiza en un programa de código abierto en Linux cuyo nombre olvide je..',
      link: 'https://github.com/AnaDaniela96/BLOG-DEPENDE'
    },
    // {
    //   title: 'Servicios y refacciones',
    //   body: 'Un proyecto a la medida. Es una landing page para un comercio mexicano de máquinas y equipos para cafeterías. En este proyecto me toco levantar requerimientos, ajustar las necesidades y apoyarles con una página que los conecta con clientes potenciales por medio del CRM que contrataron.',
    //   link: 'https://servicio-y-refacciones.cafeetrusca.com/'
    // },
    // {
    //   title: 'Trivia chickflik',
    //   body: 'Mi "hola mundo". Trivia chickflik es mi primer proyecto, lo comparto por el cariño que le tengo, con el paso del tiempo me parece significativo recordar como empezó mi carrera y qué tan lejos he podido y podré llegar.',
    //   link: 'https://github.com/AnaDaniela96/trivia'
    // },
    {
      title: 'DataBase DependeBlog',
      body: 'Este bebé es la parte trasera de DependeBlog. Mi mayor orgullo hasta ahora porque me ánime a trabajar con un proyecto de back. En este repo encontrarás la documentación de mi base de datos.',
      link: 'https://github.com/AnaDaniela96/airtport-news'
    },
  ];

  cardsHabilities = [
    {
      skill: 'Javascript',
      src: 'assets/iconos-portafolio/2.png',
      userFor: '',
      level: '🌟🌟🌟',
    },
    {
      skill: 'TypeScript',
      src: 'assets/iconos-portafolio/3.png',
      userFor: '',
      level: '🌟🌟',
    },
    {
      skill: 'HTML',
      src: 'assets/iconos-portafolio/1.png',
      userFor: '',
      level: '🌟🌟🌟🌟',
    },
    {
      skill: 'Bootstrap',
      src: 'assets/iconos-portafolio/4.png',
      userFor: '',
      level: '🌟🌟🌟🌟',
    },
    {
      skill: 'Git',
      src: 'assets/iconos-portafolio/6.png',
      userFor: '',
      level: '🌟🌟',
    },
    {
      skill: 'GitHub',
      src: 'assets/iconos-portafolio/5.png',
      userFor: '',
      level: '🌟🌟🌟',
    },
    {
      skill: 'CSS',
      src: 'assets/iconos-portafolio/7.png',
      userFor: '',
      level: '🌟🌟🌟',
    },
    {
      skill: 'Figma',
      src: 'assets/iconos-portafolio/8.png',
      userFor: '',
      level: '🌟🌟',
    },
    {
      skill: 'SQL Server',
      src: 'assets/iconos-portafolio/9.png',
      userFor: '',
      level: '🌟🌟',
    },
  ]
}
