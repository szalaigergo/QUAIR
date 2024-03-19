import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CounterBtnComponent } from "../counter-btn/counter-btn.component";
import { CommonComponent, provideTheParent } from '../common';

@Component({
    selector: 'qair-sidenav',
    standalone: true,
    template: `
  <div #container class="container">
    <h2>SideNav</h2>
    <qair-counter-btn />
  </div>`,
    styleUrl: './sidenav.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        CounterBtnComponent
    ],
    providers: [provideTheParent(SidenavComponent)],
})
export class SidenavComponent extends CommonComponent{
}
