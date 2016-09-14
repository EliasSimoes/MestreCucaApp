import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {IngredientesPage} from './../../pages/ingredientes/ingredientes';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  ingredientes: any = IngredientesPage;
  rootPage: any = this.ingredientes;

  constructor(public navCtrl: NavController) {}
  //Metodos----------------------------------------------

  openPage(){
    this.navCtrl.setRoot(IngredientesPage);
  }

  openFace(page){
    //metodo para integracao com facebook----------------
    this.rootPage = page;
  }
  //-----------------------------------------------------
}
