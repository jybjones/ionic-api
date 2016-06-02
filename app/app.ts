import {App, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {CheckinPage} from './pages/checkin/checkin';
import {LoginPage} from './pages/login/login';
import {PatientDetailPage} from './pages/patient-detail/patient-detail';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
