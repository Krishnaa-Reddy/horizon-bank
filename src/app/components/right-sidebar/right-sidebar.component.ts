import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BankCardComponent } from '../../core/bank-card/bank-card.component';

@Component({
  selector: 'right-sidebar',
  standalone: true,
  imports: [RouterLink, BankCardComponent],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.scss'
})
export class RightSidebarComponent {

  props = input<RightSidebarProps>();
  

}
