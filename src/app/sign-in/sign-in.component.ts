import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [AuthenticationService]
})

export class SignInComponent {
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user =>  {
      if (user == null) {
       this.isLoggedIn = false;
     } else {
       this.isLoggedIn = true;
       this.userName = user.displayName;
     }
   });
 }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
