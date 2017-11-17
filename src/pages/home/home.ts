import { Component } from '@angular/core'
import { IonicPage, NavController } from 'ionic-angular'

@IonicPage({
    name: 'home-page'
})
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }

    addEntry() {
        this.navCtrl.push('add-entry-page')
    }
}
