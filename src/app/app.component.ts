import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';

  constructor (private authService: AuthService){}

  onLoginClick(){
    this.authService.login();
  }

  onLogoutClick(){
    this.authService.logout();
  }

}
