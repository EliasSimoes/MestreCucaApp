import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { HomePage } from './../../pages/home/home';


@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage  {
  
  login: string;
  senha: string;

  constructor(public navCtrl: NavController, 
              public alertController: AlertController,
              public toastCtrl: ToastController) {}

  entrar() {
    let alert = this.alertController.create({
        title: 'Logando...',
        message: 'Bem Vindo ' + this.login + ', sua senha é: ' + this.senha,
        buttons: [
                  {
                    text:'Continuar'
                    
                  }

                 ]


    });
    this.navCtrl.setRoot(HomePage);
    alert.present();
      
  }

  
}
