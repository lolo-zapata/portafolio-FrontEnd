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
import { HardYSoftskillsComponent} from './Components/section/hard-y-softskills/hard-y-softskills.component';
import { ImgSComponent } from './Components/section/img-s/img-s.component';
import { ProyectsSectionComponent } from './Components/proyects-section/proyects-section.component';
import { ImgFComponent } from './Components/footer/img-f/img-f.component';
import { ProgresoBarrasComponent } from './Components/section/progreso-barras/progreso-barras.component';
import { RedesComponent } from './Components/header/banner/redes/redes.component';
import { EditComponent } from './Components/edit/edit.component';
import { LanguageComponent } from './Components/section/language/language.component';

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
    HardYSoftskillsComponent,
    ImgSComponent,
    ProyectsSectionComponent,
    ImgFComponent,
    ProgresoBarrasComponent,
    RedesComponent,
    EditComponent,
    LanguageComponent,
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
