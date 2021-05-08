import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
// import {User} from "../model/user.model";

@Injectable()
export class UserService {
  constructor(private http: HttpClient,private router: Router) { }
  
  userRegDetails(userRegData){
    return this.http.post('https://mysterious-cove-63204.herokuapp.com/api/user_details_reg',userRegData);
  }
  loginDetails(userData){
    return this.http.post('https://mysterious-cove-63204.herokuapp.com/api/user_details',userData);
  }
  // registrationDetails(userRegisterData){
  //   return this.http.post(environment.apiBaseUrl+'Account/Register',userRegisterData);
  // }
  logout(){
    localStorage.removeItem("loginStatus");
    this.router.navigate(['/login']);
  }
  // forgotPassword(forgotPasswordData){
  //   return this.http.post(environment.apiBaseUrl+'Account/ForgetPassword',forgotPasswordData);
  // }
  // loadDashboardItems():Observable<any> {
  //   return this.http.get('https://api.nomadlord.com/api/Dashboard/GetAllDetails');
  // }
  // sendDashboardItems(dashboardData) {
  //   this.router.navigate(['/app/tab/home'],dashboardData);
  // }

}
