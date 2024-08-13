import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'sign-in', pathMatch: 'full', component: SignInComponent},
    {path: 'sign-up', pathMatch: 'full', component: SignUpComponent},
];
