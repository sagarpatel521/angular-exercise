import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginScreenComponent} from "./login-screen/login-screen.component";
import {ChartScreenComponent} from "./chart-screen/chart-screen.component";

const routes: Routes = [
  { path: 'chart', component: ChartScreenComponent },// HINT: this route should be protected by an AuthGuard
  { path: '**', component: LoginScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
