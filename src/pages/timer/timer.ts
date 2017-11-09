import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the TimerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
})
export class TimerPage {
  public nourriture = [
    { nom: "Oeuf dure", time: "10", id: "1" },
    { nom: "Spaghettis", time: "10", id: "2" },
    { nom: "Poulet", time: "30", id: "3" },
    { nom: "Gratin dauphinois", time: "60", id: "4" },
    { nom: "Escalope de dinde", time: "20", id: "5" },
    { nom: "Haricots verts", time: "15" , id: "6" },
    { nom: "Gauffre au four", time: "9", id: "7" }
  ];

  public timer = "00:00";
  public selecteNourriture;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage:Storage) {

    this.selecteNourriture = this.navParams.get("index");}


ionViewDidLoad() {
  console.log('ionViewDidLoad TimerPage');
}


 


}
