import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LowerCase } from './../../pipes/lowercase';

@Component({
  templateUrl: 'build/pages/buscar/buscar.html',
  pipes: [LowerCase]
})

export class BuscarPage {

  constructor(private navCtrl: NavController) {

  }

}
