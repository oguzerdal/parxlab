import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendantComponent } from './components/attendant/attendant.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  { path: 'attendant', component: AttendantComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
