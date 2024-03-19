import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterBtnComponent } from "../counter-btn/counter-btn.component";
import { CommonComponent } from '../common';

@Component({
    selector: 'qair-sidenav',
    standalone: true,
    template: `
  <div class="container" [class.red-bgr]="(counter$ | async)! >= this.LIMIT">
    <h2>SideNav</h2>
    <qair-counter-btn [counter]="(counter$ | async)!" (increase)="increase()" />
  </div>`,
    styleUrl: './sidenav.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        CounterBtnComponent
    ]
})
export class SidenavComponent extends CommonComponent{
}
