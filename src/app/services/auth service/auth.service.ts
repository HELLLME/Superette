import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserService } from '../user service/user.service';
import { User } from 'src/app/models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
isAuth = false;
  userAuth: BehaviorSubject<User>;
  constructor(private userService : UserService) { }


  // signIn() { 
  // //   console.log('auth service')
  // //   this.isAuth = true;
  // //  return of(this.isAuth)
  // return new Promise(
  //   (res, rej) => {
  //     setTimeout(
  //       () => {
  //         this.isAuth = true;
  //         res(true);
  //       }, 2000
  //     );
     
  //   }
  // );
  //  }
  checkAuth(email: any, password: any) {

    const user = this.userService.user;

    return new Promise(
      (res, rej) => {
        setTimeout(
          () => {
            // If credentials not equel reject the promise
            if (user.email !== email || user.password !== password) {
              rej('Les identifiants sont incorrects.');
            }

            // Else just call the signIn function
            this.signIn(res);
          }, 1000
        );
      }
    );

  }

  /**
   * Method for sign in a user
   * @param res The response to return
   */
  signIn(res : any) {
    this.isAuth = true;
    res(true);
  }


   signOut() {
    this.isAuth = false;
  }
 
   Details()
   {

    return true ;
   }


 
 
}
