import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Camera } from 'ionic-native';


@Component({
  templateUrl: 'build/pages/testes/testes.html',
})
export class TestesPage {

  bar: string = 'none';
  preco: number = 0.0;
  image: any;
  
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

  takePic(){
    Camera.getPicture({
      quality: 100,
      cameraDirection: Camera.Direction.BACK,
      destinationType: Camera.DestinationType.DATA_URL 
    }).then((ImageData) => {

      let base64Image = "data:image/jpeg;base64" + ImageData;
      this.image = base64Image; 
    }, (err) => {
      console.log(err);
    }

    )


  }

}
