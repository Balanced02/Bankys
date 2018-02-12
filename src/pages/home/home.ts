import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { AcademicsPage } from "../academics/academics";
import { AdmissionsPage } from '../admissions/admissions';
import { ElearningPage } from '../elearning/elearning'
import { ContactPage } from '../contact/contact'
import { CareersPage } from '../careers/careers'
import { TestimonialsPage } from '../testimonials/testimonials'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pageNavigate(page) {
    page = page == "AdmissionPage" ? AdmissionsPage : page == "AcademicsPage" ? AcademicsPage : page == "ElearningPage" ? ElearningPage :
      page == "CareersPage" ? CareersPage : page == "TestimonialsPage" ? TestimonialsPage : HomePage
    console.log(typeof (page))
    this.navCtrl.push(page)
  }

}