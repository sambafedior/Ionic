import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';


/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  private filter = null;
  private allowedFilters = ["Done", "Not done", "All"]

  constructor(public storage: Storage) {
  }


  getFilter() {
    //récupération de la configuration enregistrée sur le périphérique
    return new Promise((resolve, reject)=>{
      this.storage.get("config.filter").then((data) => {
        this.filter = data || "All";
        resolve(data);
      });
    });
  }


  setFilter(filter) {
    this.filter = filter;
    this.storage.set("config.filter", filter);

  }
  getAllowedFilters() {
    return this.allowedFilters;
  }

}
