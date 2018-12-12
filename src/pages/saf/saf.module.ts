import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SafPage } from './saf';

@NgModule({
  declarations: [
    SafPage,
  ],
  imports: [
    IonicPageModule.forChild(SafPage),
  ],
})
export class SafPageModule {}
