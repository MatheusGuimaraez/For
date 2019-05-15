import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormularioComponent implements OnInit {

  nome:string;
  email:string;
  telefone:string;
  numero:string;
  complemento:string;  
  bairro:string;
  cidade:string;
  constructor() { }

  ngOnInit() {
  }
  exibeNaConsole() {
    console.log(`
  Nome: ${this.nome}
  Email: ${this.email}
  Telefone: ${this.telefone}
  Número: ${this.numero}
  Complemento: ${this.complemento} 
  Bairro: ${this.bairro}
  Cidade: ${this.cidade}
  `);
  }
}