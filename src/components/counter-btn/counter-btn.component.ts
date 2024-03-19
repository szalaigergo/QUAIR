import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, ViewContainerRef, Injector, OnInit } from '@angular/core';
import { CommonComponent } from '../common';
import { tap } from 'rxjs';

@Component({
  selector: 'qair-counter-btn',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<button class="btn" (click)="this.handleClick()">Clicked {{counter}} times</button>`,
  styleUrl: './counter-btn.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class CounterBtnComponent implements OnInit {
  constructor(private parent: CommonComponent) {
    
  }
  ngOnInit(): void {
  }
  @Input() counter = 0;
  @Output() increase = new EventEmitter<string>();

  handleClick() {
    this.increase.emit()
  }
 }
