import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {IngredientesPage} from './pages/ingredientes/ingredientes';
import {HistoricoPage} from './pages/historico/historico';
import {BuscarPage} from './pages/buscar/buscar';
import {ConquistasPage} from './pages/conquistas/conquistas';
import {IndiquePage} from './pages/indique/indique';
import {TestesPage} from './pages/testes/testes';
import {LoginPage} from './pages/login/login';



//-----------------------IMPORT'S^^^^


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  
  login: any = LoginPage;
  testes: any = TestesPage;
  indique: any = IndiquePage;
  conquistas: any = ConquistasPage;
  buscar: any = BuscarPage;
  historico: any = HistoricoPage;
  ingredientes: any = IngredientesPage;
  home: any = HomePage;
  
  rootPage: any = this.home;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      console.log('App rodando ok!!!');
      StatusBar.styleDefault();
    });
  }

  openPage(page){
    this.rootPage = page;
  }
}

ionicBootstrap(MyApp);
