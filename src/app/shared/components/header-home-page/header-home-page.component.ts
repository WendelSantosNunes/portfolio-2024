import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-home-page',
  templateUrl: './header-home-page.component.html',
  styleUrls: ['./header-home-page.component.scss']
})
export class HeaderHomePageComponent implements OnInit {

  isDark!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isDark = localStorage.getItem('isDark') === 'true';
    document.body.classList.toggle('dark', this.isDark)
  }

  toggleTheme(){
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark', this.isDark)
    localStorage.setItem("isDark", this.isDark.toString())
  }
}
