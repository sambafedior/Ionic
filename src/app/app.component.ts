


import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

//Page
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TodoPage } from './../pages/todo/todo';
import { TimerPage } from './../pages/timer/timer';
import { ConfigPage } from './../pages/config/config';
import { RandomUserListPage } from './../pages/random-user-list/random-user-list';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Accueil ', component: HomePage },
      { title: 'Liste', component: ListPage },
      { title: 'Tâche', component: TodoPage },
      { title: 'Timer', component: TimerPage },
      { title: 'Paramétrage', component: ConfigPage },
      { title: 'User Liste', component: RandomUserListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
