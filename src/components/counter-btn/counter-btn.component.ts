import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Optional } from '@angular/core';
import { CommonComponent } from '../common';

@Component({
  selector: 'qair-counter-btn',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<button class="btn" (click)="this.handleClick()">Clicked {{counter$ | async}} times</button>`,
  styleUrl: './counter-btn.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class CounterBtnComponent {
  counter$ = this.parent.counter$
  
  constructor(@Optional() private parent: CommonComponent){  }

  handleClick() {
    this.parent.increase();
  }
 }
