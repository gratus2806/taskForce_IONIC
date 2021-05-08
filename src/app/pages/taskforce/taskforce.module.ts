import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskforcePageRoutingModule } from './taskforce-routing.module';

import { TaskforcePage } from './taskforce.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskforcePageRoutingModule
  ],
  declarations: [TaskforcePage]
})
export class TaskforcePageModule {}
