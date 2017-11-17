import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'

import { MyApp } from './app.component'
import { HomePageModule } from '../pages/home/home.module'
import { AddEntryPageModule } from '../pages/add-entry/add-entry.module'

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        HomePageModule,
        AddEntryPageModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [ IonicApp ],
    entryComponents: [
        MyApp
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {
            provide: ErrorHandler,
            useClass: IonicErrorHandler
        }
    ]
})
export class AppModule {}
