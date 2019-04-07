import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { SetproductComponent } from './setproduct/setproduct.component';

const routes: Routes = [
  {path: '', redirectTo: '/aboutus', pathMatch: 'full'},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'setproduct', component: SetproductComponent},
  {path: '**', redirectTo: '/aboutus', pathMatch:'full'}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations:[]
})
export class AppRoutingModule { }
