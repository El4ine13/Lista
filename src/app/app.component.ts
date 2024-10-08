import { Component } from '@angular/core';
import { ListaComponent } from './lista/lista.component'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ListaComponent] 
})
export class AppComponent {
  title = 'lista-compras-app';
}
