import { Component } from '@angular/core'
import { IonicPage, NavController } from 'ionic-angular'

@IonicPage({
    name: 'add-entry-page'
})
@Component({
    selector: 'page-add-entry',
    templateUrl: 'add-entry.html',
})
export class AddEntryPage {

    entry = {}

    constructor(public navCtrl: NavController) {}

    addEntry() {
        console.log(this.entry)

        this.navCtrl.setRoot('home-page')
    }
}
