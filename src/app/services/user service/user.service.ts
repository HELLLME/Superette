import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSubject = new Subject();
  private _user: User;

  constructor() {

    this._user = new User('Helmi',
    'KHARDANI',
    'helmikhardeni@gmail.com',
    'azerty');

  }
  emitUserSubject() {
    this.userSubject.next(this._user);
  }
  /**
   * Search a user by a field name and value
   * @param searchedAttr
   * @param searchedValue
   */
  get user(): User {
    return this._user;
  }

  /**
   * Setter
   * @param value
   */
  set user(value: User) {
    this._user = value;
  }
  /**
   * Method for update a user
   * @param editedUser
   */
  updateUser(updatedUser: User) {
    this._user = updatedUser;
    this.emitUserSubject();
  }
}
