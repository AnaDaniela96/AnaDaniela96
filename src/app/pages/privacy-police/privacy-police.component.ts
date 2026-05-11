import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-privacy-police',
  imports: [HeaderComponent, CommonModule, FooterComponent],
  templateUrl: './privacy-police.component.html',
  styleUrl: './privacy-police.component.css'
})
export class PrivacyPoliceComponent {

}
