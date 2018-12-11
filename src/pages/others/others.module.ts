import { NgModule } from '@angular/core';
import { IonicPageModule, NavController } from 'ionic-angular';
import { OthersPage } from './others';
import { SocietyPage } from '../society/society';

@NgModule({
  declarations: [
    OthersPage,
  ],
  imports: [
    IonicPageModule.forChild(OthersPage),
  ],
})
export class OthersPageModule {}




