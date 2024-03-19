import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterBtnComponent } from '../counter-btn/counter-btn.component';
import { CommonComponent } from '../common';

@Component({
  selector: 'qair-footer',
  standalone: true,
  imports: [
    CommonModule, CounterBtnComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent extends CommonComponent {
 }
