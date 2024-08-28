import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { NavLayoutComponent } from './components/nav-layout/nav-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MyBanksComponent } from './my-banks/my-banks.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { PaymentTransferComponent } from './payment-transfer/payment-transfer.component';
import { sidebarLinks } from '../constants';

export const routes: Routes = [
    {
        path: '',
        component: NavLayoutComponent,
        children: [
            {path: '', component: HomeComponent},
            {path: 'my-banks', component: MyBanksComponent},
            {path: 'transaction-history', component: TransactionHistoryComponent},
            {path: 'payment-transfer', component: PaymentTransferComponent},
        ]
    },
    {path: 'sign-in', component: SignInComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: '**', component: NotFoundComponent}
];
