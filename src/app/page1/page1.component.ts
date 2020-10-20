import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  hero1 = 'Mon premier héro';
  hero2 = 'Mon deuxième héro';
  hero3 = 'Mon troisième héro';
  
  constructor() { }

  ngOnInit(): void {
  }

}
