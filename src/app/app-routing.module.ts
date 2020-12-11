import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContriesComponent } from './components/contries/contries.component';
import { HomeComponent } from './components/home/home.component';
import { PreventionComponent } from './components/prevention/prevention.component';
import { SymptomsComponent } from './components/symptoms/symptoms.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'contries',
    component:ContriesComponent
  },
  {
    path:'symptoms',
    component:SymptomsComponent
  },
  {
    path:'prevention',
    component:PreventionComponent
  },
  {
    path:'about',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
