import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';

@Component({
  selector: 'nav-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, MobileNavComponent],
  templateUrl: './nav-layout.component.html',
  styleUrl: './nav-layout.component.scss'
})
export class NavLayoutComponent {
  loggedIn = { firstName: 'Krishna', lastName: 'JSM' };
}
