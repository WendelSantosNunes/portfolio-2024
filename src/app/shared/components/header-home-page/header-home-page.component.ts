import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-home-page',
  templateUrl: './header-home-page.component.html',
  styleUrls: ['./header-home-page.component.scss']
})
export class HeaderHomePageComponent implements OnInit {

  isDark = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleTheme(){
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark', this.isDark)
  }
}
