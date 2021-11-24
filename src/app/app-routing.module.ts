import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from "./form/form.component";
import {HomeComponent} from "./home/home.component";
import {ResultComponent} from "./result/result.component";

const route: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'formulaire', component: FormComponent },
  { path: 'home', component: HomeComponent },
  { path: 'result', component: ResultComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FormComponent,HomeComponent,ResultComponent]
