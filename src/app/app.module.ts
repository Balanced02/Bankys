import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AcademicsPage } from '../pages/academics/academics';
import { AdmissionsPage } from '../pages/admissions/admissions';
import { ElearningPage } from '../pages/elearning/elearning'
import { ContactPage } from '../pages/contact/contact'
import { CareersPage } from '../pages/careers/careers'
import { TestimonialsPage } from '../pages/testimonials/testimonials'
import { GalleryPage } from '../pages/gallery/gallery'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AcademicsPage,
    AdmissionsPage,
    ElearningPage,
    ContactPage,
    CareersPage,
    TestimonialsPage,
    GalleryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AcademicsPage,
    AdmissionsPage,
    ElearningPage,
    ContactPage,
    CareersPage,
    TestimonialsPage,
    GalleryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
