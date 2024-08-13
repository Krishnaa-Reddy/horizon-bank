import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'header-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-box.component.html',
  styleUrl: './header-box.component.css',
})
export class HeaderBoxComponent {
  @Input() headerBox!: HeaderBoxProps
}
