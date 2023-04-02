import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginScreenComponent} from "./login-screen/login-screen.component";
import {ChartScreenComponent} from "./chart-screen/chart-screen.component";
import { AuthGuardService } from './core/guard/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: LoginScreenComponent },
  { path: 'chart', component: ChartScreenComponent, canActivate:[AuthGuardService] },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
