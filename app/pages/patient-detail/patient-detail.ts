import {Page, NavController, NavParams} from 'ionic-angular';
import {PeopleService} from '../../providers/people-service/people-service';

/*
  Generated class for the PatientDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/patient-detail/patient-detail.html',
  providers: [PeopleService]
})

export class PatientDetailPage {
   patient: any;
   constructor(public nav: NavController, public navParams: NavParams, public peopleService: PeopleService) {
   	// If we navigated to this page, we will have an item available as a nav param
   	this.patient = navParams.get('patient');
   	this.peopleService = peopleService;
   }

}

