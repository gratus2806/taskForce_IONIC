import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
  }
  logout(){
      localStorage.removeItem("loginStatus");
      localStorage.removeItem("userData");
      this.router.navigate(['/login']);
  }
}
