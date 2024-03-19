import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterBtnComponent } from "../counter-btn/counter-btn.component";
import { CommonComponent } from '../common';

@Component({
    selector: 'qair-content',
    standalone: true,
    template: `
  <div class="container" [class.red-bgr]="(counter$ | async)! >= this.LIMIT">
    <h2>Content</h2>
    <div class="button-container">
      <div class="button-wrapper">
        <p>Both counter increases on click</p>
        <qair-counter-btn [counter]="(counter$ | async)!" (increase)="increase()" />
        <qair-counter-btn [counter]="(counter$ | async)!" (increase)="increase()" />
      </div>

    </div>
</div>`,
    styleUrl: './content.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        CounterBtnComponent
    ]
})
export class ContentComponent extends CommonComponent{

}
