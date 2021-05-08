import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {
  contactForm: FormGroup;
  userData;
  states=[{
    name:"श्री.प्रशांत रॉड्रिग्ज",
    phoneNo:"9930951697"
  },{
    name:"श्री.रॉजर रॉड्रिग्ज",
    phoneNo:"9324640909"
  },{
    name:"श्री.ऑलीसन तुस्कानो",
    phoneNo:"8149842464"
  
  },{
    name:"श्री. डेनिस डाबरे",
    phoneNo:"9820145112"

  },{
    name:"श्री. सिझर गोन्साल्वीस",
    phoneNo:"8454040982"

  },{
    name:"श्री. सचिन लोपीस",
    phoneNo:"9224442944"

  },{
    name:"श्री. जिमी लोपीस",
    phoneNo:"9881423708"

  },{
    name:"श्री. जेम्स रॉड्रिग्ज",
    phoneNo:"7507644164"

  },{
    name:"श्री. रॉबिन रॉड्रिग्ज",
    phoneNo:"9320076670"

  },{
    name:"श्री. एडविन डाबरे",
    phoneNo:"9028285176"

  },{
    name:"श्री. मार्शल लोपीस",
    phoneNo:"9320076670"

  },{
    name:"श्री. रिक्सन तुस्कानो",
    phoneNo:"8329084821"

  },{
    name:"श्री. बबन लोपीस",
    phoneNo:"8793070950"

  },{
    name:"श्री. सचिन मेंडीस",
    phoneNo:"8450956779"

  },{
    name:"श्री. फ्रेंकी रॉड्रिग्ज",
    phoneNo:"9763753844"

  },{
    name:"श्री. पॉल घोन्साल्विस",
    phoneNo:"9820138933"

  },{
    name:"श्री. विजय तुस्कानो",
    phoneNo:"9561444816"

  },{
    name:"श्री.स्विटसन फर्नांडिस",
    phoneNo:"9762304088"

  },{
    name:"श्री. फेलिक्स आल्मेडा",
    phoneNo:"9004927625"

  },{
    name:"श्री. रॉनल्ड गोम्स्",
    phoneNo:"8007915323"

  },{
    name:"श्री. विजय वाझ",
    phoneNo:"9867453694"

  },{
    name:"श्री. संदीप फिगेर",
    phoneNo:"9004693334"

  },{
    name:"श्री. राजा फोस",
    phoneNo:"9923483344"

  },{
    name:"श्री. संदेश तुस्कानो",
    phoneNo:"9869669666"

  },{
    name:"श्री.एलिस डाबरे",
    phoneNo:"986731442"

  },{
    name:"श्री. नेल्सन दोडती",
    phoneNo:"9028259176"

  },{
    name:"श्री. संजय डाबरे",
    phoneNo:"9820184279"

  },{
    name:"श्री. मेकन्झी डाबरे",
    phoneNo:"9665006429"

  },{
    name:"सौ. ज्योत्स्ना डाबरे",
    phoneNo:"9511228092"

  },{
    name:"श्री. एवरेस्ट डाबरे",
    phoneNo:"9987671819"

  }];
  phoneNo;
  localUserData;
  msgSuccessful;
  constructor(private formBuilder: FormBuilder,private router: Router) { 
    if(localStorage.getItem('userData')!="" || localStorage.getItem('userData')!='null' || localStorage.getItem('userData')!='NULL'){
      this.localUserData = JSON.parse(localStorage.getItem('userData'));
      console.log("local storage",this.localUserData)
    }
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      userMessage:['',Validators.required],
    });
  }
  checkValue(event){
    this.phoneNo=event.detail.value
  }
  onSubmitContactForm(){
    this.userData = this.contactForm.controls.userMessage.value;
    window.open(`sms:${this.phoneNo}?body=My Name is ${this.localUserData.userFullName} and Im from ${this.localUserData.userParish} Parish,my village is ${this.localUserData.userVillage} and my Mobile No. is ${this.localUserData.userPhoneNumber}. ${this.userData} `, '_system')
    this.msgSuccessful = true;
    setTimeout(() => {
      console.log('hide');
      this.msgSuccessful = false;
    }, 3000);
    this.clearValues();
    this.router.navigateByUrl('/app/tab/home');
  }
  clearValues(){
    this.phoneNo=" ";
    this.userData=" ";
  }
  

}

