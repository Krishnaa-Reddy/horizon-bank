import { Component } from '@angular/core';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'sign-up',
  standalone: true,
  imports: [AuthFormComponent],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {

  formBaseData: FormBaseData[] = [
    {
      type: 'firstName',
      label: 'First Name',
      formBuilder: ['', [Validators.required, Validators.minLength(3)]],
    },
    {
      type: 'lastName',
      label: 'Last Name',
      formBuilder: ['', [Validators.required, Validators.minLength(3)]],
    },
    {
      type: 'address',
      label: 'Address',
      formBuilder: ['', [Validators.required, Validators.maxLength(50)]],
      entireRow: true
    },
    {
      type: 'state',
      label: 'State',
      formBuilder: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(2)]],
    },
    {
      type: 'postalCode',
      label: 'Postal Code',
      formBuilder: ['', [Validators.required, Validators.maxLength(50)]],
    },
    {
      type: 'dateOfBirth',
      label: 'Date of Birth',
      formBuilder: ['', [Validators.required, Validators.minLength(3)]],
    },
    {
      type: 'ssn',
      label: 'SSN',
      formBuilder: ['', [Validators.required, Validators.minLength(3)]],
    },
    {
      type: 'email',
      label: 'Email',
      formBuilder: ['', [Validators.required, Validators.email]],
      entireRow: true
    },
    {
      type: 'password',
      label: 'Password',
      formBuilder: ['', [Validators.required, Validators.minLength(6)]],
      entireRow: true
    },
  ];
}
