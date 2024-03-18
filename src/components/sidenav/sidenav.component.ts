import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterBtnComponent } from "../counter-btn/counter-btn.component";
import { SideNavService } from '../../services/side-nav.service';

@Component({
    selector: 'quair-sidenav',
    standalone: true,
    template: `
  <div class="container" [class.red-bgr]="(counter$ | async)! >= 10">
    <h2>SideNav</h2>
    <quair-counter-btn [counter]="(counter$ | async)!" (increase)="increase()" />
  </div>`,
    styleUrl: './sidenav.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        CounterBtnComponent
    ]
})
export class SidenavComponent {
  constructor(private readonly sideNavService: SideNavService) {}
  counter$ = this.sideNavService.counter$;

  increase = () => this.sideNavService.increase();
}
