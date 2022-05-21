import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SectionComponent } from './Components/section/section.component';
import { EducationSectionComponent } from './Components/education-section/education-section.component';
import { ContactSectionComponent } from './Components/contact-section/contact-section.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NavbarComponent } from './Components/header/navbar/navbar.component';
import { BannerComponent } from './Components/header/banner/banner.component';
import { ImgComponent } from './Components/header/navbar/img/img.component';
import { HarySoftskillsComponent } from './Components/section/hary-softskills/hary-softskills.component';
import { ImgSComponent } from './Components/section/img-s/img-s.component';
import { ProyectsSectionComponent } from './Components/proyects-section/proyects-section.component';
import { ImgPComponent } from './Components/proyects-section/img-p/img-p.component';
import { ImgFComponent } from './Components/footer/img-f/img-f.component';
import { ProgresoBarrasComponent } from './Components/section/progreso-barras/progreso-barras.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent,
    EducationSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    NavbarComponent,
    BannerComponent,
    ImgComponent,
    HarySoftskillsComponent,
    ImgSComponent,
    ProyectsSectionComponent,
    ImgPComponent,
    ImgFComponent,
    ProgresoBarrasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
