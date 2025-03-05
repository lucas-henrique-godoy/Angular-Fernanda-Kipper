import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = "Lucas";
  idButton = "eeree";
  
  //meuBooleano = false;

  /*atualizaBooleano(valor: boolean)
  {
    this.meuBooleano = valor;
  }
  */

  submit()
  {
    console.log("video")
  }
}
