import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterBtnComponent } from '../counter-btn/counter-btn.component';
import { FooterServcie } from '../../services/footer.service';

@Component({
  selector: 'quair-footer',
  standalone: true,
  imports: [
    CommonModule, CounterBtnComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  constructor(private footerService: FooterServcie) {}
  counter$ = this.footerService.counter$;

  increase = () => this.footerService.increase();
 }
