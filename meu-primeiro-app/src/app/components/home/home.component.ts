import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = "Lucas";
  idButton = "eeree";
  deveMostrarTitulo = true;
  listItems = ["Lucas", "Henrique", "Godoy"]
  
  //meuBooleano = false;

  /*atualizaBooleano(valor: boolean)
  {
    this.meuBooleano = valor;
  }
  */

  submit(event: any)
  {
    console.log(event)
  }
}
