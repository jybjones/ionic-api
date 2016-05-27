import {Page, NavController, NavParams} from 'ionic-angular';
import {PeopleService} from '../../providers/people-service/people-service';
import {PatientDetailPage} from '../patient-detail/patient-detail';

@Page({
  templateUrl: 'build/pages/checkin/checkin.html',
  providers: [PeopleService]
})

//dd a constructor to our page, create a people property, import the PeopleService, and assign the PeopleService to a property of the class.
export class CheckinPage {
	public people: any;

  constructor(public nav: NavController, public peopleService: PeopleService, navParams: NavParams){
    this.loadPeople();
    this.nav = nav;

  }

  loadPeople(){
    this.peopleService.load()
    .then(data => {
      this.people = data;
    });
  }
  goToDetail(){
      this.nav.push(PatientDetailPage);
    }

}
