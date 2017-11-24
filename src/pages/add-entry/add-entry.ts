import { Component } from '@angular/core'
import { AlertController, IonicPage, LoadingController, NavController } from 'ionic-angular'
import { ApiService } from '../../services/ApiService'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@IonicPage({
    name: 'add-entry-page'
})
@Component({
    selector: 'page-add-entry',
    templateUrl: 'add-entry.html',
})
export class AddEntryPage {
    form: FormGroup

    constructor(private formBuilder: FormBuilder,
                private navCtrl: NavController,
                private apiService: ApiService,
                private loadingCtrl: LoadingController,
                private alertCtrl: AlertController) {
        this.form = this.formBuilder.group({
            title: [ '', Validators.required ],
            description: [ '' ]
        })
    }

    addEntry() {
        this.loadingCtrl
            .create({
                content: 'Adding entry. Please wait...',
                dismissOnPageChange: true
            })
            .present()

        this.apiService.create(this.form.value.title, this.form.value.description)
            .then(response => {
                this.navCtrl.pop()
            })
            .catch(error => {
                let alert = this.alertCtrl.create({
                    title: 'something went wrong',
                    subTitle: error.message,
                    buttons: ['Ok']
                })
                alert.present()
            })
    }
}
