import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AcademicsPage } from "../pages/academics/academics";
import { AdmissionsPage } from '../pages/admissions/admissions';
import { ElearningPage } from '../pages/elearning/elearning'
import { ContactPage } from '../pages/contact/contact'
import { CareersPage } from '../pages/careers/careers'
import { TestimonialsPage } from '../pages/testimonials/testimonials'
import { GalleryPage } from '../pages/gallery/gallery'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Academics', component: AcademicsPage },
      { title: 'Admissions', component: AdmissionsPage },
      { title: 'E-Learning', component: ElearningPage },
      { title: 'Extra-Curricular', component: ListPage },
      { title: 'Contact Us', component: ContactPage },
      { title: 'Careers', component: CareersPage },
      { title: 'Gallery', component: GalleryPage },
      { title: 'Testimonials', component: TestimonialsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
