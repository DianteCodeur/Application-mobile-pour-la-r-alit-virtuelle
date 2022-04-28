import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  displayCamera: boolean
	displayAlertMissing: boolean
	displayShareButton: boolean
	userMessage: string
  

  	constructor(private router :Router,public actionSheetController: ActionSheetController ,public screenshot: Screenshot,private navCtrl: NavController)
  {}

  async ngOnInit() {
		this.displayCamera = true
		this.displayAlertMissing = true
		this.displayShareButton = true
		this.userMessage = 'Show me your <br />drawing'
		this.initErrorMessageLoader();
		//registerWebPlugin(FileSharer);
  }


  public initErrorMessageLoader() {

    window.addEventListener('message', handleMessage, false);
  
      const self = this
  
      function handleMessage(event) {
        if (event.data === 'IS_VISIBLE') {
          self.displayAlertMissing = false;
          self.displayShareButton = true;
        } else if (event.data === 'IS_NOT_VISIBLE') {
          self.displayAlertMissing = true;
          self.displayShareButton = false;
          self.userMessage = 'I don\'t see <br />your drawing'
        }
      }
    }


    takeScreenshotURI() {
      this.screenshot.URI(30).then(res => {
        const uri = res.URI;
       // this.shareScreenshot(uri);
      });
    }

    takeScreenshot(){
      this.navCtrl.navigateForward('/home');
    }

    navigate(){
      this.router.navigate(['/login'])
    }
    
  
    

}
