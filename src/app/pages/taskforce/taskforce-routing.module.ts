import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskforcePage } from './taskforce.page';

const routes: Routes = [
  {
    path: '',
    component: TaskforcePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskforcePageRoutingModule {}
