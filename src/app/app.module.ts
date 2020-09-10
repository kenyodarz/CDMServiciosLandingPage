// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// MODULES
import { AppRoutingModule } from './app-routing.module';
// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HmainComponent } from './components/home/hmain/hmain.component';
import { HheaderComponent } from './components/home/hheader/hheader.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { DocumentacionComponent } from './components/documentacion/documentacion.component';
import { DheaderComponent } from './components/documentacion/dheader/dheader.component';
import { DmainComponent } from './components/documentacion/dmain/dmain.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HmainComponent,
    HheaderComponent,
    NavComponent,
    FooterComponent,
    DocumentacionComponent,
    DheaderComponent,
    DmainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
