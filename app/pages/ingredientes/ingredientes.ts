import { IngredientesModel } from './ingredientes.model';

import { Component, OnInit, Injectable } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { IngredientesService } from './ingredientes.service';

import 'rxjs/Rx';

@Injectable()

@Component({
  templateUrl: 'build/pages/ingredientes/ingredientes.html',

})
export class IngredientesPage implements OnInit {
ingred: IngredientesModel [];


constructor(  public navCtrl: NavController,
              public toastCtrl: ToastController,
              private ingredienteService: IngredientesService) {
                
              }

ngOnInit(){
  this.ingredienteService.getIngredientes().subscribe(
    data => this.ingred = data,
    error => console.log(error)
  )
}


}
