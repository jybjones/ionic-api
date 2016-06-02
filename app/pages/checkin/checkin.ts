import {Page, NavController, NavParams} from 'ionic-angular';
import {PeopleService} from '../../providers/people-service/people-service';
import {PatientDetailPage} from '../patient-detail/patient-detail';

@Page({
  templateUrl: 'build/pages/checkin/checkin.html',
  providers: [PeopleService]
})

//dd a constructor to our page, create a people property, import the PeopleService, and assign the PeopleService to a property of the class.
export class CheckinPage {
	patients: any[];

  constructor(public nav: NavController, public peopleService: PeopleService, navParams: NavParams){
    this.peopleService = peopleService;
    this.peopleService.findAll().then(data => { this.patients = data});
    this.nav = nav;

  }

  search(event, key) {
    this.peopleService.findByName(event.target.value).then(patients => this.patients = patients);
  }

  itemTapped(event, patient) {
    this.nav.push(PatientDetailPage, {
      patient: patient
    });
  }
 
}
