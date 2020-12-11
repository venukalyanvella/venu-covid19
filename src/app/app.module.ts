import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContriesComponent } from './components/contries/contries.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { PreventionComponent } from './components/prevention/prevention.component';
import { HomeComponent } from './components/home/home.component';
import { CoviddataService } from './services/coviddata.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ContriesComponent,
    DashboardCardComponent,
    SymptomsComponent,
    PreventionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,Ng2GoogleChartsModule,HttpClientModule
  ],
  providers: [CoviddataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
