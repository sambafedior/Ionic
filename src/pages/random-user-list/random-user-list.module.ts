import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RandomUserListPage } from './random-user-list';

@NgModule({
  declarations: [
    RandomUserListPage,
  ],
  imports: [
    IonicPageModule.forChild(RandomUserListPage),
  ],
})
export class RandomUserListPageModule {}
