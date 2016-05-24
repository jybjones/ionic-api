import {Page} from 'ionic-angular';
import {PeopleService} from '../../providers/people-service/people-service';

@Page({
  templateUrl: 'build/pages/checkin/checkin.html',
  providers: [PeopleService]
})

//dd a constructor to our page, create a people property, import the PeopleService, and assign the PeopleService to a property of the class.
export class CheckinPage {
	public people: any;

  constructor(public peopleService: PeopleService){
    this.loadPeople();
  }

  loadPeople(){
    this.peopleService.load()
    .then(data => {
      this.people = data;
    });
  }
}
