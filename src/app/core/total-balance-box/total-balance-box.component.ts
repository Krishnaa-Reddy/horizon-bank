import { Component, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { formatAmount } from '../../../lib/utils';
import { CountUpModule } from 'ngx-countup';
import { DoughnutChartComponent } from '../doughnut-chart/doughnut-chart.component';

@Component({
  selector: 'total-balance-box',
  standalone: true,
  imports: [CommonModule, CountUpModule, DoughnutChartComponent],
  templateUrl: './total-balance-box.component.html',
})
export class TotalBalanceBoxComponent {
  @Input() totalBal !: TotlaBalanceBoxProps;
}
