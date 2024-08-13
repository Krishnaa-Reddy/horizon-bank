import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'doughnut-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './doughnut-chart.component.html',
})
export class DoughnutChartComponent implements OnInit {

  isBrowser!: boolean;
  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    
  }

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  public datasets : ChartConfiguration<'doughnut'>['data']['datasets'] = [
    {label: 'Banks', data: [1250, 2500, 3750], backgroundColor: ['#0747b6', '#2265d8', '#2f91f']}
  ];

  public options: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
    cutout: '60%',
    plugins: {
      legend: {
        display: false
      }
    }
  };

  public labels: ChartConfiguration<'doughnut'>['data']['labels'] = [
    'Bank 1', 'Bank 2', 'Bank 3'
  ];
}
