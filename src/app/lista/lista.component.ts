import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class ListaComponent {
  listaCompras: { nome: string, comprado: boolean }[] = [
    { nome: 'Maçã', comprado: false },
    { nome: 'Arroz', comprado: false },
    { nome: 'Leite', comprado: true },
  ];

  novoItem: string = ''; 

  marcarComoComprado(item: { nome: string, comprado: boolean }) {
    item.comprado = !item.comprado; 
  }

  adicionarItem(nome: string) {
    if (nome) {
      this.listaCompras.push({ nome, comprado: false });
      this.novoItem = ''; 
    }
  }

  removerItem(index: number) {
    this.listaCompras.splice(index, 1);
  }
}
