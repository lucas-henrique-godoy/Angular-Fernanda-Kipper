import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
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

  
  @Input("name") teste!: string;
  
  @Output()  emitindoValorName = new EventEmitter<string>();
   
  
  /*meuBooleano = false;
     atualizaBooleano(valor: boolean)
    {
      this.meuBooleano = valor;
    }
   */
 
    submit()
    {
      this.emitindoValorName.emit(this.name)
      //this.enviaFormularioService.enviaInformacaoParaBackend("enviando informacao");
    }
}
