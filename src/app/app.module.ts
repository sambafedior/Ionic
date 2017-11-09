import { HttpModule } from '@angular/http';


import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TodoPage } from './../pages/todo/todo';
import { TodoFormPage } from './../pages/todo-form/todo-form';
import { ConfigPage } from './../pages/config/config';
import { TimerPage } from './../pages/timer/timer';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';
import { ConfigProvider } from '../providers/config/config';
import { Camera } from '@ionic-native/camera';
import { RandomUserListPage } from './../pages/random-user-list/random-user-list';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TodoPage,
    TodoFormPage,
    TimerPage,
    ConfigPage,
    RandomUserListPage
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
    
       
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TodoPage,
    TodoFormPage,
    TimerPage,
    ConfigPage,
    RandomUserListPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
    Camera

   
  ]
})
export class AppModule {}
