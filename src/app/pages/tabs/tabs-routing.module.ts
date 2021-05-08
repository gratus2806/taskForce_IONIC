import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabsPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },{
          path: 'taskforce',
          loadChildren: () => import('../taskforce/taskforce.module').then( m => m.TaskforcePageModule)
        },
        {
          path: 'doctor-info',
          loadChildren: () => import('../doctor-info/doctor-info.module').then( m => m.DoctorInfoPageModule)
        },
        {
          path: 'contactus',
          loadChildren: () => import('../contactus/contactus.module').then( m => m.ContactusPageModule)
        }
    ]
  },
  {
    path: '',
    redirectTo:'/app/tab/home',
    pathMatch:'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
