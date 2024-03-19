import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterBtnComponent } from "../counter-btn/counter-btn.component";
import { CommonComponent, provideTheParent } from '../common';

@Component({
    selector: 'qair-content',
    standalone: true,
    template: `
  <div #container class="container">
    <h2>Content</h2>
    <div class="button-container">
      <div class="button-wrapper">
        <p>Both counter increases on click</p>
        <qair-counter-btn />
        <qair-counter-btn />
      </div>

    </div>
</div>`,
    styleUrl: './content.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        CounterBtnComponent
    ],
    providers: [provideTheParent(ContentComponent)],
})
export class ContentComponent extends CommonComponent{

}
