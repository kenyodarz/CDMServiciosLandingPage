// ANGULAR
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// MODULES
import { AppRoutingModule } from './app-routing.module';
// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HmainComponent } from './components/home/hmain/hmain.component';
import { HheaderComponent } from './components/home/hheader/hheader.component';
import { FooterComponent } from './components/footer/footer.component';
import { DocumentacionComponent } from './components/documentacion/documentacion.component';
import { DheaderComponent } from './components/documentacion/dheader/dheader.component';
import { DmainComponent } from './components/documentacion/dmain/dmain.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { SmainComponent } from './components/servicios/smain/smain.component';
import { SheaderComponent } from './components/servicios/sheader/sheader.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { NheaderComponent } from './components/nosotros/nheader/nheader.component';
import { NmainComponent } from './components/nosotros/nmain/nmain.component';
import { PrimengModule } from './primeng.module';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HmainComponent,
    HheaderComponent,
    FooterComponent,
    DocumentacionComponent,
    DheaderComponent,
    DmainComponent,
    ServiciosComponent,
    SmainComponent,
    SheaderComponent,
    NosotrosComponent,
    NheaderComponent,
    NmainComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
