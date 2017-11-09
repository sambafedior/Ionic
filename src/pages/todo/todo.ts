import { ConfigProvider } from './../../providers/config/config';

import { TodoFormPage } from './../todo-form/todo-form';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the TodoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage {
  public todos = [
    { title: "Sortir la chat", done: false },
    { title: "Trianguler les pyramides", done: false },
    { title: "Surélever les l'Atrantide", done: false },
    { title: "Payer la dette Greque", done: false },
    { title: "Nettoyer les écurie", done: false }
  ]

  public filter;
  public allowedFilters;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public toastCtrl: ToastController,
    public storage: Storage,
    public config:ConfigProvider 
  ) {

    this.filter="All";

    //Définition de filter en fonction du provider
    config.getFilter().then((data)=>{
      this.filter = data;
      console.log("promesse " + data);
    });

    // Récupération de la liste des filtres
    this.allowedFilters = this.config.getAllowedFilters();

    //récuperation de la liste des todos
    storage.get("todos").then((data)=>{
      if(data){
        data = JSON.parse(data);
        this.todos = data;
      }
    })

    //Mise à jour d'une tâche
    events.subscribe("task.update", (data) => {
      data = JSON.parse(data);
      this.todos[data.index] = data.task;
      this.persistTask();
    });

    //Création d'une tâche
    events.subscribe("task.create", (data) => {
      data = JSON.parse(data);
      this.todos.push(data.task);
      this.persistTask();
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoPage');
  }

  goToForm(data, pos) {
    if (!data) {
      data = {
        title: null,
        done: false
      }
    }
if(! data.hasOwnProperty("imageData")){
  data.imageData = null;
}

    let params = {
      index: pos,
      task: data
    }
    this.navCtrl.push(TodoFormPage, params);
  }
//suppréssion de la tâche
  removeItem(pos) {
    let toast = this.toastCtrl.create({
      message: this.todos[pos].title + " a été supprimer",
      duration: 1500,
      position: 'top'
    });
    this.todos.splice(pos, 1);
    toast.present();
    this.persistTask();
  }

  filterTodo() {
    let filtered = this.todos;
    console.log("filtre " + this.filter);
    switch (this.filter) {
      case "All":
        filtered = this.todos;
        break;
      case "Done":
        filtered = this.todos.filter((item) => { return item.done });
        break;
      case "Not done":
        filtered = this.todos.filter((item) => { return !item.done });
        break;
    }
    return filtered;
  }
  persistTask(){
    this.storage.set("todos", JSON.stringify(this.todos));
  }


}
