import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderHomePageComponent } from './shared/components/header-home-page/header-home-page.component';
import { MobileHomeMenuComponent } from './shared/components/header-home-page/mobile-home-menu/mobile-home-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderHomePageComponent,
    MobileHomeMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
