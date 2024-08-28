import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBoxComponent } from '../../shared/header-box/header-box.component';
import { TotalBalanceBoxComponent } from '../../core/total-balance-box/total-balance-box.component';
import { RightSidebarComponent } from '../right-sidebar/right-sidebar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderBoxComponent, TotalBalanceBoxComponent, RightSidebarComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  loggedIn  = { firstName: 'Krishna', lastName: 'Reddy', email: 'xyzmyboy@pqr.com' };

  headerProps : HeaderBoxProps = {
    type: 'greeting',
    user: this.loggedIn.firstName,
    subtext: 'Access & manage your account and transactions efficiently',
    title: 'Welcome,'
  }

  sampleBanks: typeof this.props.banks = [
    {
      id: "account-123",
      availableBalance: 5000,
      currentBalance: 5000,
      officialName: "Checking Account",
      mask: "1234",
      institutionId: "inst-001",
      name: "My Checking",
      type: "depository",
      subtype: "checking",
      appwriteItemId: "appwrite-123",
      sharableId: "sharable-123",
      
      $id: "bank-001",
      accountId: "account-123",
      bankId: "bank-123",
      accessToken: "token-abc123",
      fundingSourceUrl: "https://bank.com/funding",
      userId: "user-123",
    },
    {
      id: "account-456",
      availableBalance: 2500,
      currentBalance: 3000,
      officialName: "Savings Account",
      mask: "5678",
      institutionId: "inst-002",
      name: "My Savings",
      type: "depository",
      subtype: "savings",
      appwriteItemId: "appwrite-456",
      sharableId: "sharable-456",
      
      $id: "bank-002",
      accountId: "account-456",
      bankId: "bank-456",
      accessToken: "token-def456",
      fundingSourceUrl: "https://bank.com/funding",
      userId: "user-456",
    }
  ];  

  props : RightSidebarProps = {
    user: {
      ...this.loggedIn,
      $id: '',
      userId: '',
      dwollaCustomerUrl: '',
      dwollaCustomerId: '',
      address1: '',
      city: '',
      state: '',
      postalCode: '',
      dateOfBirth: '',
      ssn: ''
    },
    transactions: [],
    banks: this.sampleBanks
  }

  totalBalanceProps : TotlaBalanceBoxProps = {
    accounts : [],
    totalBanks : 2,
    totalCurrentBalance : 1230.5
  }

}
