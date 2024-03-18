import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { CounterBtnComponent } from "../counter-btn/counter-btn.component";

@Component({
    selector: 'quair-content',
    standalone: true,
    template: `
  <div class="container" [class.red-bgr]="(counter$ | async)! >= 10">
    <h2>Content</h2>
    <div class="button-container">
      <div class="button-wrapper">
        <p>Both counter increases on click</p>
        <quair-counter-btn [counter]="(counter$ | async)!" (increase)="increase()" />
        <quair-counter-btn [counter]="(counter$ | async)!" (increase)="increase()" />
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
export class ContentComponent {
  constructor(private readonly contentService: ContentService) {}
  counter$ = this.contentService.counter$;

  increase = () => this.contentService.increase();

}
