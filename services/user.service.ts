import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from '../modal/user';
import { Observable } from 'rxjs/';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../modal/constant/urls'
import { IUserLogin } from '../modal/IUserLogin';
import { IUserRegister } from '../modal/IUserRegister';


import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;

  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

   public get currentUser():User{
    return this.userSubject.value;
  }
  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(tap({
      next: (user) => {
        this.setUserToLocalStorage(user);
        this.userSubject.next(user);
        this.toastrService.success(`Welcome to FoodApp ${user.name}!`,
          'Login Successful')
      },
      error: (errorResponse) => {
        this.toastrService.error(errorResponse.error, 'Login Failed')

      }
    }));
  }

  register(userRegister: IUserRegister): Observable<User> {
    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(`Your Register To foodApp ${user.name}!`,
          'Register Successful')

        }, error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Register Failed')
        }
      })
    )
  }

  logout() {
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }


  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));

  }
  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) return JSON.parse(userJson) as User;
    return new User();
  }

}
