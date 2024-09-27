import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideNavigatorBarComponent} from "./public/components/side-navigator-bar/side-navigator-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavigatorBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GastroGo-FrontEnd';
}
