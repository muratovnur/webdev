import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab4';
  selectedCat: string;
  constructor() {
    this.selectedCat = 'cat1';
  }
  showCat1(): void{
    this.selectedCat = 'cat1';
  }
  showCat2(): void{
    this.selectedCat = 'cat2';
  }
  showCat3(): void{
    this.selectedCat = 'cat3';
  }
  showCat4(): void{
    this.selectedCat = 'cat4';
  }
}
