import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'quair-counter-btn',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<button class="btn" (click)="this.handleClick()">Clicked {{counter}} times</button>`,
  styleUrl: './counter-btn.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterBtnComponent {
  @Input() counter = 0;
  @Input() parent = "";
  @Output() increase = new EventEmitter<string>();

  handleClick() {
    this.increase.emit(this.parent)
  }
 }
