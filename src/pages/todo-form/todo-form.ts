import { Camera, CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the TodoFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo-form',
  templateUrl: 'todo-form.html',
})
export class TodoFormPage {
  public task;
  public index: number = -1;
  public cameraOptions:CameraOptions = {
    quality: 75,
    targetHeight: 500,
    targetWidth: 500,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG
    
  }

   constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public events: Events, 
    public camera:Camera) {

    //récuperation des donées provenant de la liste des tâches
    this.task = this.navParams.get("task");
    this.index = this.navParams.get("index");
  }

  ionViewDidLoad() {

  }

  takePicture(){
    this.camera.getPicture(this.cameraOptions)
      .then((pictureData) => {
        this.task.imageData = pictureData;
      }
    );
  }

  saveTask() {
    let params = {
      task: this.task,
      index: this.index
    };

    if (this.index >= 0) {
      this.events.publish("task.update", JSON.stringify(params));
    } else {
      this.events.publish("task.create", JSON.stringify(params));
    }
    this.navCtrl.pop();
  }
}
