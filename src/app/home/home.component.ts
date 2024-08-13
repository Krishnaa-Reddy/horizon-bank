import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBoxComponent } from '../header-box/header-box.component';
import { TotalBalanceBoxComponent } from '../total-balance-box/total-balance-box.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderBoxComponent, TotalBalanceBoxComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  loggedIn  = { firstName: 'Krishna' };

  headerProps : HeaderBoxProps = {
    type: 'greeting',
    user: this.loggedIn.firstName,
    subtext: 'Access and manage your account and transactions efficiently',
    title: 'Welcome,'
  }

  totalBalanceProps : TotlaBalanceBoxProps = {
    accounts : [],
    totalBanks : 2,
    totalCurrentBalance : 1230.5
  }

}
