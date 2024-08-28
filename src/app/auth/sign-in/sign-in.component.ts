import { Component, input } from '@angular/core';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'sign-in',
  standalone: true,
  imports: [AuthFormComponent],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {

  formBaseData: FormBaseData[] = [
    {
      type: 'email',
      label: 'Email',
      formBuilder: ['', [Validators.required, Validators.email]],
      signinRow: true,
      entireRow: true
    },
    {
      type: 'password',
      label: 'Password',
      formBuilder: ['', [Validators.required, Validators.minLength(6)]],
      signinRow: true,
      entireRow: true
    },
  ];
  
}
