import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  standalone: true,
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items: any[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.fetchItems();
  }

  fetchItems() {
    this.shoppingListService.getItems().subscribe((data: any[]) => {
      this.items = data;
    });
  }

  addItem(item: any) {
    this.shoppingListService.addItem(item).subscribe(() => {
      this.fetchItems(); 
    });
  }
}
