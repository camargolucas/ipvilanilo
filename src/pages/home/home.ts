import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  @ViewChild(Slides)slide: Slides
  
  arrSlides = [{img:'../../assets/imgs/upa.png'},{img:'../../assets/imgs/ump.png'},{img:'../../assets/imgs/uph.png'},{img:'../../assets/imgs/saf.png'}]
  constructor(){
    
  }

 ionViewDidLoad(){
  this.slide.autoplayDisableOnInteraction = false
 }

}
