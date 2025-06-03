import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-splashscreen',
  imports: [FormsModule],
  templateUrl: './splashscreen.component.html',
  styleUrl: './splashscreen.component.css'
})
export class SplashscreenComponent {
   
  userSrv: UserService = inject(UserService);
  router : Router = inject(Router);
  username : string = ""; 
  serverUrl : string = "";
   
  
  connect(): void { 
    this.userSrv.setUsername(this.username);
    this.router.navigate(['chat']);
  }
}
