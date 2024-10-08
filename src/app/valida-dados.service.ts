import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidaDadosService {

  constructor() { }

  validarEntrada(entrada: string): boolean {
    const regex = /^[0-9+\-*/().]*$/;
    return regex.test(entrada);
  }

  validarExpressao(entrada: string): boolean {
    try {
      const resultado = eval(entrada);

      if (entrada.includes('/0')) {
        return false;
      }

      return true;
    } 
      catch (e) {
      return false;
    }
  }
}