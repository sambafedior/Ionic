import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the RandomUserListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-random-user-list',
  templateUrl: 'random-user-list.html',
})
export class RandomUserListPage {
  public users = [];
  public url = "https://randomuser.me/api/";
  public option = "?results=10";


  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.loadUser();
  }

  loadUser() {
    this.http.get(this.url + this.option)
      .subscribe((response) => {
        this.users = response.json().results;
        console.log(this.users);
      },
      (err) => {
        console.log(err);
      }
      )
  }


  doRefresh(refresher) {
    this.http.get(this.url + this.option)
      .subscribe((response) => {
        this.users = response.json().results;
        console.log(this.users);
        refresher.complete();
      },
      (err) => {
        console.log(err);
      }
      )
  }

  loadMoreUsers(event) {
    this.http.get(this.url + this.option)
      .subscribe((response) => {
        this.users = this.users.concat(response.json().results);
        event.complete();
      },
      (err) => {
        console.log(err);
      }
      )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RandomUserListPage');
  }

  rechercher(){
    
  }
}
