import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { NavLayoutComponent } from './components/nav-layout/nav-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: NavLayoutComponent,
        children: [
            {path: '', pathMatch: 'full', component: HomeComponent},
            {path: '**', component: NotFoundComponent}
        ]
    },
    {path: 'sign-in', pathMatch: 'full', component: SignInComponent},
    {path: 'sign-up', pathMatch: 'full', component: SignUpComponent},
];
