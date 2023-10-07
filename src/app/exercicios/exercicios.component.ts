import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent {

  frase: string = "Olá, mundo";
  meuLink:string = "https://www.exercicios.com";

  corDeFundo: string = 'white'; // 
  corDaFonte: string = 'black'; // 

  mudarCores() {
   
    if (this.corDeFundo === 'white') {
      this.corDeFundo = 'blue' ;
      this.corDaFonte = 'white';   
    } else {
      this.corDeFundo = 'white';  
      this.corDaFonte = 'black';  
    }
  }
 
  opcaoSelecionada: string = ''; 
}
