import { Component, inject, input, OnInit, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmFormFieldModule } from '@spartan-ng/ui-formfield-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { CustomFormFieldComponent } from '../../shared/custom-form-field/custom-form-field.component';
import { HlmSpinnerComponent } from '@spartan-ng/ui-spinner-helm';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'auth-form',
  standalone: true,
  imports: [
    HlmFormFieldModule,
    HlmInputDirective,
    HlmButtonDirective,
    ReactiveFormsModule,
    CustomFormFieldComponent,
    HlmSpinnerComponent,
    RouterLink,
    NgClass
  ],
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss',
})
export class AuthFormComponent implements OnInit {
  type = input<'sign-in' | 'sign-up'>('sign-in');
  formBaseData = input<FormBaseData[]>([]);

  user = signal<User | null>(null);
  signInForm !: FormGroup;
  isLoading = signal(false);

  formMetaData : FormMetaData[] = [];

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.formMetaData = this.formBaseData().map((formField) => {
      const { type, label, formBuilder, entireRow, signinRow } = formField;
      return <FormMetaData>{
        formLabel: { for: type, label },
        formControlName: type,
        name: type,
        type,
        placeholder: label,
        formBuilder: formBuilder,
        entireRow,
        signinRow
      };
    });
    
    const formGroup = this.formMetaData.reduce((partialGroup, formData) => {
      return { ...partialGroup, [formData.type]: formData.formBuilder };
    }, {});

    this.signInForm = this.fb.group(formGroup);
  }


  onSubmit(): void {
    if (this.signInForm.valid) {
      console.log('Form Submitted!', this.signInForm.value);
    } else {
      console.log('Form is not valid!');
    }
  }

  get formControls() {
    return this.signInForm.controls;
  }
}
