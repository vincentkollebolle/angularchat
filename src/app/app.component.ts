import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SplashscreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chatclient';
}
