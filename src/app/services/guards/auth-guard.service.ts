import { AuthService } from './../auth.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot,
         CanActivate,
         Router,
         RouterStateSnapshot
        } from "@angular/router";
import { Observable } from "rxjs";


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
              route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot,
              ): boolean | Observable<boolean> |  Promise<boolean> {
    let isLoggedIn = this.authService.isAuthenticated();
    if(isLoggedIn){
      return true;
    }else{
      return this.router.navigate(['/']);
    }
  }

}
