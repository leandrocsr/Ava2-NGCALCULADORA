import { Component } from '@angular/core';
import { ValidaDadosService } from '../valida-dados.service';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})
export class TecladoComponent {
  public resultado:string = "";

  constructor(private validaDadosService: ValidaDadosService) { }

  clicar(valor:string){
    if (this.validaDadosService.validarEntrada(this.resultado + valor)) {
      this.resultado += valor;
    } 
    else {
      alert('Entrada inválida!');
    }
  }
  limpar(){
  this.resultado = "";
  }
  igual(){
    if (this.validaDadosService.validarExpressao(this.resultado)) {
      try {
        this.resultado = eval(this.resultado).toString();
      } catch (e) {
        alert('Erro ao calcular!');
      }
    } else {
      alert('Expressão inválida!');
    }
  }
}
