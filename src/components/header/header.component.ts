import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterBtnComponent } from "../counter-btn/counter-btn.component";
import { CommonComponent } from '../common';

@Component({
    selector: 'qair-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        CounterBtnComponent
    ]
})
export class HeaderComponent extends CommonComponent {
  
 }
