import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // if (this.authService.isAuth) {
      return true;
      
    // }

    // this.router.navigate(['/auth']);
  
  }

    // canActivate(route: ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean |{
    //   if (this.authService.isAuth) {
    //     return true;
    //   }
    //   this.router.navigate(['/auth']   );
    // }
  
}
