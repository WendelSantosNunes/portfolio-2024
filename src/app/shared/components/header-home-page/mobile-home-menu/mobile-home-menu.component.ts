import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-home-menu',
  templateUrl: './mobile-home-menu.component.html',
  styleUrls: ['./mobile-home-menu.component.scss']
})
export class MobileHomeMenuComponent implements OnInit {

  visible: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setMenuIsVisible(){
    this.visible = !this.visible;
  }
}
