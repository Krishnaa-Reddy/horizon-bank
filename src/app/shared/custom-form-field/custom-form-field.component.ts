import { Component, input } from '@angular/core';

@Component({
  selector: 'custom-form-field',
  standalone: true,
  imports: [],
  templateUrl: './custom-form-field.component.html',
  styleUrl: './custom-form-field.component.scss'
})
export class CustomFormFieldComponent {
  formLabel = input<FormLabel>( {for: '', label: ''} );

}
