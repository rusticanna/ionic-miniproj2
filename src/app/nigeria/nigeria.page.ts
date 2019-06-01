import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-nigeria',
  templateUrl: './nigeria.page.html',
  styleUrls: ['./nigeria.page.scss'],
})
export class NigeriaPage implements OnInit {

  // variable for 2-way binding
  city;

  constructor(private toastController: ToastController) { }

  ngOnInit() { }

  handlePrintToConsole() {
    console.log(`the value of input box is: ${this.city}`);
    this.showToast();
  }

  async showToast() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'middle',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

}
