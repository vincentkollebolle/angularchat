import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username : string = "";

  constructor() { }

  getUsername(): string { 
    return this.username;
  }

  setUsername(username : string): void { 
    this.username = username;
    console.log(username);
  }
}
