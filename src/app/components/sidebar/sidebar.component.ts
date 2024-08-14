import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { sidebarLinks } from '../../../constants/index';
import { NgClass } from '@angular/common';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  sidebarLinks = sidebarLinks;
  user = input<SiderbarProps>({user: {
    $id: '',
    email: '',
    userId: '',
    dwollaCustomerUrl: '',
    dwollaCustomerId: '',
    firstName: '',
    lastName: '',
    address1: '',
    city: '',
    state: '',
    postalCode: '',
    dateOfBirth: '',
    ssn: ''
  }});
}
