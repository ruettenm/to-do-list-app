import { Component } from '@angular/core'
import { AlertController, IonicPage, LoadingController, NavController } from 'ionic-angular'
import { ApiService } from '../../services/ApiService'

@IonicPage({
    name: 'home-page'
})
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    constructor(public navCtrl: NavController, public apiService: ApiService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}

    addEntry() {
        this.navCtrl.push('add-entry-page')
    }

    removeEntry(entryId: string) {
        const loading = this.loadingCtrl.create({
            content: 'Deleting entry. Please wait...',
        })
        loading.present()

        this.apiService.remove(entryId)
            .then(() => {
                loading.dismiss()
            })
            .catch(error => {
                loading.dismiss()
                let alert = this.alertCtrl.create({
                    title: 'something went wrong',
                    subTitle: error.message,
                    buttons: ['Ok']
                })
                alert.present()
            })
    }
}
