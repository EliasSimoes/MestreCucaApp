import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';



@Component({
  templateUrl: 'build/pages/testes/testes.html',
})
export class TestesPage {

  bar: string = 'none';
  preco: number = 0.0;
  
  constructor(private navCtrl: NavController, 
              private alertController: AlertController) {}



  showAlert() {
    let alert = this.alertController.create({
        title: 'Registre o preço',
        message: 'Insira o preço da cerveja e o nome do bar',
        inputs: [
                  {
                    name:'bar',
                    placeholder:'Nome do bar'

                  },
                  {
                   
                    name:'preco',
                    placeholder:'Insira um valor'
                  }
                ],

        buttons: [
                  {
                    text:'Cancelar',

                  },
                  {
                    text:'Ok',
                    handler: (data) =>{
                      this.preco = data.preco;
                      this.bar = data.bar;
                    }
                  },

                 ]
    });

    alert.present();
  }

}
