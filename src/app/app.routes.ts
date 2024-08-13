import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomeComponent},
    {path: 'sign-in', pathMatch: 'full', component: SignInComponent},
    {path: 'sign-up', pathMatch: 'full', component: SignUpComponent},
];
