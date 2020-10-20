import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  hero1 = 'Mon premier héro';
  hero2 = 'Mon deuxième héro';
  hero3 = 'Mon troisième héro';
  hero4 = 'Mon quatrième héro';
  hero5 = 'Mon cinquième héro';  

  constructor() { }

  ngOnInit(): void {
  }

}
