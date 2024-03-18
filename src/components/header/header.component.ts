import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterBtnComponent } from "../counter-btn/counter-btn.component";
import { HeaderService } from '../../services/header.service';

@Component({
    selector: 'quair-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        CounterBtnComponent
    ]
})
export class HeaderComponent {
  constructor(private readonly headerService: HeaderService) {}
  counter$ = this.headerService.counter$;

  increase = () => this.headerService.increase();
  
 }
