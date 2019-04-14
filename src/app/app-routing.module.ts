import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { AboutusComponent } from './shared/aboutus/aboutus.component';
import { AdmintabComponent } from './admin/admintab/admintab.component';
import { ProductComponent } from './user/product/product.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/aboutus', pathMatch: 'full'},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'product', component: ProductComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdmintabComponent},
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
