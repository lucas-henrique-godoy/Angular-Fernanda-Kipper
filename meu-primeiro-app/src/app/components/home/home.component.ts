import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EnviaFormularioService } from '../../services/envia-formulario.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private enviaFormularioService = inject(EnviaFormularioService);
  name = "Lucas";
  idButton = "eeree";
  deveMostrarTitulo = true;
  listItems = ["Lucas", "Henrique", "Godoy"]
  
   /*meuBooleano = false;
     atualizaBooleano(valor: boolean)
    {
      this.meuBooleano = valor;
    }
   */
 
    submit()
    {
      this.enviaFormularioService.enviaInformacaoParaBackend("enviando informacao");
    }
}
