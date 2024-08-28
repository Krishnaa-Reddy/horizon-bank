import { Component, input } from '@angular/core';
import { formatAmount } from '../../../lib/utils';

@Component({
  selector: 'bank-card',
  standalone: true,
  imports: [],
  templateUrl: './bank-card.component.html',
  styleUrl: './bank-card.component.scss'
})
export class BankCardComponent {

  key = input<string>();
  account = input<(Bank & Account)>();
  userName = input<string>();
  showBalance = input<boolean>(true);

  formatBal = () => formatAmount(this.account()?.currentBalance ?? 0);

}
