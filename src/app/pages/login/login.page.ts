import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router,ActivatedRoute} from "@angular/router";
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  userData;
  userRegData;
  localUserData;
  finalPassword;
  loginFormDiv=true;
  registerFormDiv=false;
  passMissMatch=false;
  userDetailMissMatch=false;
  loginStatusParse;

  constructor(private formBuilder: FormBuilder, private router: Router,public userService: UserService) { 
    if(localStorage.getItem('userData')!="" || localStorage.getItem('userData')!='null' || localStorage.getItem('userData')!='NULL'){
      console.log( localStorage.getItem('loginStatus'))
     if(localStorage.getItem('loginStatus')=='true'){
        this.router.navigateByUrl('/app/tab/home');
       }
    } else{
      alert("in else login")
      this.router.navigateByUrl('/login');
    }
     console.log("cunstructor console")
  }

  ngOnInit() {
    console.log("ominit  console")
    this.loginForm = this.formBuilder.group({
      userPhone:['',Validators.required],
      password: ['',Validators.required],
      
    });

    this.registerForm = this.formBuilder.group({
      userFullName:['',Validators.required],
      userPhoneNumber: ['',Validators.required],
      userPassword: ['',Validators.required],
      confirmUserPassword: ['',Validators.required],
      userVillage: ['',Validators.required],
      userParish: ['',Validators.required]
    });
  }


   onSubmitLoginForm(){
    this.userData = {
      userPhone: this.loginForm.controls.userPhone.value,
      Password: this.loginForm.controls.password.value,
    }
    if(this.userData.userPhone=='' || this.userData.Password==''){
      this.userDetailMissMatch = true;
      setTimeout(() => {
        console.log('hide');
        this.userDetailMissMatch = false;
      }, 3000);
    } else{
      this.userService.loginDetails(this.userData).subscribe(data => {
        console.log(data['userDetails'])
        if(data['status']==true){
          localStorage.setItem('loginStatus', JSON.stringify(data['status']));
          localStorage.setItem('userData', JSON.stringify(data['userDetails']));
          this.router.navigateByUrl('/app/tab/home');
        } else{
          this.userDetailMissMatch = true;
          setTimeout(() => {
            console.log('hide');
            this.userDetailMissMatch = false;
          }, 3000);
        }
  
      })

    }
    
    // if(this.userData.UserName=='' || this.userData.Password==''){
    //   this.userDetailMissMatch = true;
    //   setTimeout(() => {
    //     console.log('hide');
    //     this.userDetailMissMatch = false;
    //   }, 3000);
    // } else{
    //     if(this.userData.UserName==this.localUserData.userPhoneNumber && this.userData.Password==this.localUserData.userPassword ){
    //       // alert("in if");

    //       localStorage.setItem('loginStatus', '1');
    //       this.router.navigateByUrl('/app/tab/home');
    //     } else{
    //       this.userDetailMissMatch = true;
    //       setTimeout(() => {
    //         console.log('hide');
    //         this.userDetailMissMatch = false;
    //       }, 3000);
    //     }
      
    // }
    
    //  this.loginForm.reset();
    //  console.log("userdata>>>>",this.userData)
  }
  onSubmitRegisterForm(){
   
      this.userRegData= {
        userFullName: this.registerForm.controls.userFullName.value,
        userPhoneNumber: this.registerForm.controls.userPhoneNumber.value,
        userPassword:this.registerForm.controls.userPassword.value,
        userVillage:this.registerForm.controls.userVillage.value,
        userParish:this.registerForm.controls.userParish.value,
      }
      if(this.registerForm.controls.confirmUserPassword.value==this.registerForm.controls.userPassword.value){
        this.userService.userRegDetails(this.userRegData).subscribe(data => {
          console.log(data)
          if(data['status']==true){
            console.log("in true if")
            this.router.navigateByUrl('/login');
            this.registerForm.reset();
          } else{
              // this._failure.next('Password MissMatch...');
              this.passMissMatch=true;
              setTimeout(() => {
                console.log('hide');
                this.passMissMatch = false;
              }, 3000);
          }
        })
      }
      
    //   if(this.registerForm.controls.confirmUserPassword.value==this.registerForm.controls.userPassword.value){
    //     localStorage.setItem('userData', JSON.stringify(this.userData));
    //     // this.loginFormDiv=true;
    //     // this.registerFormDiv=false;
    //     this.router.navigateByUrl('/login');
    //     this.router.navigate(['/login'])
    //     // this.router.navigateByUrl('/login');
    //   } else{
    //   // this._failure.next('Password MissMatch...');
    //   this.passMissMatch=true;
    //   setTimeout(() => {
    //     console.log('hide');
    //     this.passMissMatch = false;
    //   }, 3000);
    // }
    
    // // console.log("userdata input>>>>",this.userData)
    // this.registerForm.reset();
    
  }
  showRegisterFormDiv(){
    console.log("registerform div>>>>>")
    this.registerFormDiv=true;
    this. loginFormDiv= false;
  }
  nevigateToLogin(){
    console.log("selected>>>")
    this. loginFormDiv= true;
    this.registerFormDiv=false;
  }

}

