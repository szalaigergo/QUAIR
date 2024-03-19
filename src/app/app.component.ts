import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../components/header/header.component";
import { SidenavComponent } from "../components/sidenav/sidenav.component";
import { FooterComponent } from '../components/footer/footer.component';
import { ContentComponent } from '../components/content/content.component';
import { CommonComponent } from '../components/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, SidenavComponent, FooterComponent, ContentComponent, CommonComponent]
})
export class AppComponent {
  
}
