import { Component } from '@angular/core';
import{Router, RouterEvent} from '@angular/router'
import { Platform } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BackButtonService } from './service/back-button.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  selectedPath='';
  loginStatus;
  constructor(private backButtonService: BackButtonService,private router:Router,private platform: Platform,private splashScreen: SplashScreen,private statusBar: StatusBar) {
    // this.loginStatus=localStorage.getItem('loginStatus');
    // console.log(">>>>",this.loginStatus)
    // this.userService.loadDashboardItems().subscribe(data => {
      
    // })
    // router.events.subscribe((event: RouterEvent) => {
    //     this.selectedPath = event.url;
    //     // console.log("this.selectedPathMenu",this.selectedPath)
    //     this.loginStatus=localStorage.getItem('loginStatus');
    // });
    console.log("app module cunstructor console")
    if(localStorage.getItem('userData')!="" || localStorage.getItem('userData')!='null' || localStorage.getItem('userData')!='NULL'){
      console.log( localStorage.getItem('loginStatus'))
     if(localStorage.getItem('loginStatus')=='true'){
        this.router.navigateByUrl('/app/tab/home');
       }
    } else{
      alert("in else login")
      this.router.navigateByUrl('/login');
    }
     
    this.initializeApp();
  }

  initializeApp() {
    
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.backButtonService.init();
    });
  }
}
