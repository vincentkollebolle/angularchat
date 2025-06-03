import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-splashscreen',
  imports: [FormsModule],
  templateUrl: './splashscreen.component.html',
  styleUrl: './splashscreen.component.css'
})
export class SplashscreenComponent {
   username : string = "";
   serverUrl : string = "";
   
   
}
