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

}
