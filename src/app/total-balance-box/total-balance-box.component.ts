import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { formatAmount } from '../../lib/utils';
import { CountUpDirective } from '../count-up.directive';

@Component({
  selector: 'total-balance-box',
  standalone: true,
  imports: [CountUpDirective, CommonModule],
  templateUrl: './total-balance-box.component.html',
})
export class TotalBalanceBoxComponent implements OnInit {
  @Input() totalBal !: TotlaBalanceBoxProps;
  curr = signal<string>('');

  ngOnInit(): void {
      const curr = formatAmount(this.totalBal.totalCurrentBalance);
      this.curr.set(curr)
  }




}
