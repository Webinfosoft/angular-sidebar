import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotFoundError } from 'rxjs';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'analytics', component: HomeComponent }, 
  { path: 'preview', component: HomeComponent }, 
  // {404 error routing}
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }