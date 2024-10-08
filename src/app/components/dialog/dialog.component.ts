import { Component } from "@angular/core";
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm";
import { BrnDialogTriggerDirective, BrnDialogContentDirective } from "@spartan-ng/ui-dialog-brain";
import { HlmDialogComponent, HlmDialogContentComponent, HlmDialogHeaderComponent, HlmDialogFooterComponent, HlmDialogTitleDirective, HlmDialogDescriptionDirective } from "@spartan-ng/ui-dialog-helm";
import { HlmInputDirective } from "@spartan-ng/ui-input-helm";
import { HlmLabelDirective } from "@spartan-ng/ui-label-helm";

@Component({
  selector: 'spartan-dialog',
  standalone: true,
  imports: [
    BrnDialogTriggerDirective,
    BrnDialogContentDirective,

    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogHeaderComponent,
    HlmDialogFooterComponent,
    HlmDialogTitleDirective,
    HlmDialogDescriptionDirective,

    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,
  ],
  template: `
    <hlm-dialog>
      <button id="edit-profile" brnDialogTrigger hlmBtn>Edit Profile</button>
      <hlm-dialog-content class="sm:max-w-[425px]" *brnDialogContent="let ctx">
        <hlm-dialog-header>
          <h3 hlmDialogTitle>Edit profile</h3>
          <p hlmDialogDescription>Make changes to your profile here. Click save when you're done.</p>
        </hlm-dialog-header>
        <div class="py-4 grid gap-4">
          <div class="items-center grid grid-cols-4 gap-4">
            <label hlmLabel for="name" class="text-right">Name</label>
            <input hlmInput id="name" value="Pedro Duarte" class="col-span-3" />
          </div>
          <div class="items-center grid grid-cols-4 gap-4">
            <label hlmLabel for="username" class="text-right">Username</label>
            <input hlmInput id="username" value="@peduarte" class="col-span-3" />
          </div>
        </div>
        <hlm-dialog-footer>
          <button hlmBtn type="submit">Save changes</button>
        </hlm-dialog-footer>
      </hlm-dialog-content>
    </hlm-dialog>
  `,
})
export class DialogComponent {}

