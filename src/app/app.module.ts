import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderHomePageComponent } from './shared/components/header-home-page/header-home-page.component';
import { MobileHomeMenuComponent } from './shared/components/header-home-page/mobile-home-menu/mobile-home-menu.component';
import { PresentationHomePageComponent } from './pages/home/components/presentation-home-page/presentation-home-page.component';
import { AboutHomePageComponent } from './pages/home/components/about-home-page/about-home-page.component';
import { ProjectsHomePageComponent } from './pages/home/components/projects-home-page/projects-home-page.component';
import { SkillsHomePageComponent } from './pages/home/components/skills-home-page/skills-home-page.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { ContactHomePageComponent } from './pages/home/components/contact-home-page/contact-home-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderHomePageComponent,
    MobileHomeMenuComponent,
    PresentationHomePageComponent,
    AboutHomePageComponent,
    ProjectsHomePageComponent,
    SkillsHomePageComponent,
    FooterComponent,
    ContactHomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
