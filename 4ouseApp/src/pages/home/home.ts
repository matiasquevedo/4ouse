import { Component} from '@angular/core';
import { NavController,  ToastController } from 'ionic-angular';
import { ItinerarioPage } from '../../pages/itinerario/itinerario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	
  constructor(public navCtrl: NavController,private toastCtrl: ToastController) {

  } 

  itinerario(){
  	this.navCtrl.push(ItinerarioPage);
  }

  cochera: string = 'white';
  cocina: string = 'white';
  banio: string = 'white';
  pasillo: string = 'white';
  dormitorio1: string = 'white';
  dormitorio2: string = 'white';

  cocheras() {
          this.cochera = '#389e97';
          this.cocina = 'white';
          this.banio = 'white';
          this.pasillo = 'white';
          this.dormitorio1 = 'white';
          this.dormitorio2 = 'white';
      
  }

  cocinas() {
          this.cochera = 'white';
          this.cocina = '#389e97';
          this.banio = 'white';
          this.pasillo = 'white';
          this.dormitorio1 = 'white';
          this.dormitorio2 = 'white';
      
  }

  banios() {
          this.cochera = 'white';
          this.cocina = 'white';
          this.banio = '#389e97';
          this.pasillo = 'white';
          this.dormitorio1 = 'white';
          this.dormitorio2 = 'white';
      
  }

  pasillos() {
          this.cochera = 'white';
          this.cocina = 'white';
          this.banio = 'white';
          this.pasillo = '#389e97';
          this.dormitorio1 = 'white';
          this.dormitorio2 = 'white';
      
  }

  dm1() {
          this.cochera = 'white';
          this.cocina = 'white';
          this.banio = 'white';
          this.pasillo = 'white';
          this.dormitorio1 = '#389e97';
          this.dormitorio2 = 'white';
      
  }
  dm2() {
          this.cochera = 'white';
          this.cocina = 'white';
          this.banio = 'white';
          this.pasillo = 'white';
          this.dormitorio1 = 'white';
          this.dormitorio2 = '#389e97';
      
  }




    
 }
