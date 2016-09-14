import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/ingredientes/ingredientes.html',
})
export class IngredientesPage {

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) {}

  

    public ingred: Array<any>  =
    [
    'Tomate',
    'Cenoura',
    'Beterraba',
    'Batata',
    'Alface',
    'Rucula',
    'Agrião',
    'Espinafre',
    'Abobrinha',
    'Abobora',
    'Mandioca',
    'Pimentão',
    'Cebola',
    ];

}
