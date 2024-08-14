import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { lucideCross } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { BrnSheetTriggerDirective, BrnSheetContentDirective, BrnSheetCloseDirective } from '@spartan-ng/ui-sheet-brain';
import { HlmSheetComponent, HlmSheetContentComponent, HlmSheetHeaderComponent, HlmSheetFooterComponent, HlmSheetTitleDirective, HlmSheetDescriptionDirective } from '@spartan-ng/ui-sheet-helm';
import { sidebarLinks } from '../../../constants/index';

@Component({
  selector: 'mobile-nav',
  standalone: true,
  imports: [
    BrnSheetTriggerDirective,
    BrnSheetContentDirective,
    BrnSheetCloseDirective,
    HlmSheetComponent,
    HlmSheetContentComponent,
    HlmSheetHeaderComponent,
    HlmSheetFooterComponent,
    HlmSheetTitleDirective,
    HlmSheetDescriptionDirective,
    HlmButtonDirective,
    HlmInputDirective,
    HlmIconComponent,
    HlmLabelDirective,
    RouterLink,
    RouterLinkActive,
  ],
  providers: [provideIcons({ lucideCross })],
  templateUrl: './mobile-nav.component.html',
})
export class MobileNavComponent {

  @Input() user !:MobileNavProps;
  sidebarLinks = sidebarLinks
}
