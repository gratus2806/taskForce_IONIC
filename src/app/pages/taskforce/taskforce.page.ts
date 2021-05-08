import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-taskforce',
  templateUrl: './taskforce.page.html',
  styleUrls: ['./taskforce.page.scss'],
})
export class TaskforcePage implements OnInit {
  nandakhalDiv;
  agashiDiv;
  sherlaiDiv;
  rajodiDiv;
  nanbhatDiv;
  bolinjDiv;
  umraleDiv;
  mardesDiv;
  gomesaliDiv;
  gassDiv;
  nirmalDiv;
  bhaugaonDiv;
  nandakhal=[{
    name:"श्री.प्रशांत रॉड्रिग्ज",
    phoneNo:"9930951697"
  
  },{
    name:"श्री.रॉजर रॉड्रिग्ज",
    phoneNo:"9324640909"
  
  },{
    name:"श्री.ऑलीसन तुस्कानो",
    phoneNo:"8149842464"
  
  }];
  agashi=[{
    name:"श्री. डेनिस डाबरे",
    phoneNo:"9820145112"

  },{
    name:"श्री. सिझर गोन्साल्वीस",
    phoneNo:"8454040982"

  }];
  sherlai=[{
    name:"श्री. सचिन लोपीस",
    phoneNo:"9224442944"

  },{
    name:"श्री. जिमी लोपीस",
    phoneNo:"9881423708"

  }];
  rajodi=[{
    name:"श्री. जेम्स रॉड्रिग्ज",
    phoneNo:"7507644164"

  },{
    name:"श्री. रॉबिन रॉड्रिग्ज",
    phoneNo:"9320076670"

  }];
  nanbhat=[{
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

  }];
  bolinj=[{
    name:"श्री. सचिन मेंडीस",
    phoneNo:"8450956779"

  },{
    name:"श्री. फ्रेंकी रॉड्रिग्ज",
    phoneNo:"9763753844"

  }];
  umrale=[{
    name:"श्री. पॉल घोन्साल्विस",
    phoneNo:"9820138933"

  },{
    name:"श्री. विजय तुस्कानो",
    phoneNo:"9561444816"

  }];
  mardes=[{
    name:"श्री.स्विटसन फर्नांडिस",
    phoneNo:"9762304088"

  },{
    name:"श्री. फेलिक्स आल्मेडा",
    phoneNo:"9004927625"

  }];
  gomasali=[{
    name:"श्री. रॉनल्ड गोम्स्",
    phoneNo:"8007915323"

  },{
    name:"श्री. विजय वाझ",
    phoneNo:"9867453694"

  }];
  gass=[{
    name:"श्री. संदीप फिगेर",
    phoneNo:"9004693334"

  },{
    name:"श्री. राजा फोस",
    phoneNo:"9923483344"

  },{
    name:"श्री. संदेश तुस्कानो",
    phoneNo:"9869669666"

  }];
  nirmal=[{
    name:"श्री.एलिस डाबरे",
    phoneNo:"986731442"

  },{
    name:"श्री. नेल्सन दोडती",
    phoneNo:"9028259176"

  },{
    name:"श्री. संजय डाबरे",
    phoneNo:"9820184279"

  }];
  bhaugaon=[{
    name:"श्री. मेकन्झी डाबरे",
    phoneNo:"9665006429"

  },{
    name:"सौ. ज्योत्स्ना डाबरे",
    phoneNo:"9511228092"

  },{
    name:"श्री. एवरेस्ट डाबरे",
    phoneNo:"9987671819"

  }];
  localUserData;
  constructor(public alertController: AlertController,private callNumber: CallNumber) { 
    // this.presentAlertRadio()
    if(localStorage.getItem('userData')!="" || localStorage.getItem('userData')!='null' || localStorage.getItem('userData')!='NULL'){
      this.localUserData = JSON.parse(localStorage.getItem('userData'));
      console.log("local storage>>",this.localUserData)
    }
  }

  ngOnInit() {
  }
  async presentAlertRadio() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Select Parish',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'नंदाखाल',
          value: 'nandakhal',
          handler: data => {
            console.log('OK clicked. Data -> ' ,data.value);
            if(data.value=='nandakhal'){
              this.nandakhalDiv=true;
              this.agashiDiv=false;
              this.sherlaiDiv=false;
              this.rajodiDiv=false;
              this.nanbhatDiv=false;
              this.bolinjDiv=false;
              this.umraleDiv=false;
              this.mardesDiv=false;
              this.gomesaliDiv=false;
              this.gassDiv=false;
              this.nirmalDiv=false;
              this.bhaugaonDiv=false;
            }
          }
         
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'आगाशी',
          value: 'agashi',
          handler: data => {
            console.log('OK clicked. Data -> ' ,data.value);
            if(data.value=='agashi'){
              this.nandakhalDiv=false;
              this.agashiDiv=true;
              this.sherlaiDiv=false;
              this.rajodiDiv=false;
              this.nanbhatDiv=false;
              this.bolinjDiv=false;
              this.umraleDiv=false;
              this.mardesDiv=false;
              this.gomesaliDiv=false;
              this.gassDiv=false;
              this.nirmalDiv=false;
              this.bhaugaonDiv=false;
            }
          },
        },
        {
          name: 'radio3',
          type: 'radio',
          label: ' शिर्लय',
          value: 'sherlai',
          handler: data => {
            console.log('OK clicked. Data -> ' ,data.value);
            if(data.value=='sherlai'){
              this.nandakhalDiv=false;
              this.agashiDiv=false;
              this.sherlaiDiv=true;
              this.rajodiDiv=false;
              this.nanbhatDiv=false;
              this.bolinjDiv=false;
              this.umraleDiv=false;
              this.mardesDiv=false;
              this.gomesaliDiv=false;
              this.gassDiv=false;
              this.nirmalDiv=false;
              this.bhaugaonDiv=false;
            }
          },
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'राजोडी',
          value: 'rajodi',
          handler: data => {
            console.log('OK clicked. Data -> ' ,data.value);
            if(data.value=='rajodi'){
              this.nandakhalDiv=false;
              this.agashiDiv=false;
              this.sherlaiDiv=false;
              this.rajodiDiv=true;
              this.nanbhatDiv=false;
              this.bolinjDiv=false;
              this.umraleDiv=false;
              this.mardesDiv=false;
              this.gomesaliDiv=false;
              this.gassDiv=false;
              this.nirmalDiv=false;
              this.bhaugaonDiv=false;
            }
          }
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'नानभाट',
          value: 'nanbhat',
          handler: data => {
            console.log('OK clicked. Data -> ' ,data.value);
            if(data.value=='nanbhat'){
              this.nandakhalDiv=false;
              this.agashiDiv=false;
              this.sherlaiDiv=false;
              this.rajodiDiv=false;
              this.nanbhatDiv=true;
              this.bolinjDiv=false;
              this.umraleDiv=false;
              this.mardesDiv=false;
              this.gomesaliDiv=false;
              this.gassDiv=false;
              this.nirmalDiv=false;
              this.bhaugaonDiv=false;
            }
          },
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'बोळींज',
          value: 'bolinj',
          handler: data => {
            console.log('OK clicked. Data -> ' ,data.value);
            if(data.value=='bolinj'){
              this.nandakhalDiv=false;
              this.agashiDiv=false;
              this.sherlaiDiv=false;
              this.rajodiDiv=false;
              this.nanbhatDiv=false;
              this.bolinjDiv=true;
              this.umraleDiv=false;
              this.mardesDiv=false;
              this.gomesaliDiv=false;
              this.gassDiv=false;
              this.nirmalDiv=false;
              this.bhaugaonDiv=false;
            }
          },
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'उमराळे',
          value: 'umrale',
          handler: data => {
            console.log('OK clicked. Data -> ' ,data.value);
            if(data.value=='umrale'){
              this.nandakhalDiv=false;
              this.agashiDiv=false;
              this.sherlaiDiv=false;
              this.rajodiDiv=false;
              this.nanbhatDiv=false;
              this.bolinjDiv=false;
              this.umraleDiv=true;
              this.mardesDiv=false;
              this.gomesaliDiv=false;
              this.gassDiv=false;
              this.nirmalDiv=false;
              this.bhaugaonDiv=false;
            }
          },
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'मर्देस',
          value: 'mardes',
          handler: data => {
            console.log('OK clicked. Data -> ' ,data.value);
            if(data.value=='mardes'){
              this.nandakhalDiv=false;
              this.agashiDiv=false;
              this.sherlaiDiv=false;
              this.rajodiDiv=false;
              this.nanbhatDiv=false;
              this.bolinjDiv=false;
              this.umraleDiv=false;
              this.mardesDiv=true;
              this.gomesaliDiv=false;
              this.gassDiv=false;
              this.nirmalDiv=false;
              this.bhaugaonDiv=false;
            }
          },
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'गोम्सआळी',
          value: 'gomasali',
          handler: data => {
            console.log('OK clicked. Data -> ' ,data.value);
            if(data.value=='gomasali'){
              this.nandakhalDiv=false;
              this.agashiDiv=false;
              this.sherlaiDiv=false;
              this.rajodiDiv=false;
              this.nanbhatDiv=false;
              this.bolinjDiv=false;
              this.umraleDiv=false;
              this.mardesDiv=false;
              this.gomesaliDiv=true;
              this.gassDiv=false;
              this.nirmalDiv=false;
              this.bhaugaonDiv=false;
            }
          },
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'गास',
          value: 'gass',
          handler: data => {
            console.log('OK clicked. Data -> ' ,data.value);
            if(data.value=='gass'){
              this.nandakhalDiv=false;
              this.agashiDiv=false;
              this.sherlaiDiv=false;
              this.rajodiDiv=false;
              this.nanbhatDiv=false;
              this.bolinjDiv=false;
              this.umraleDiv=false;
              this.mardesDiv=false;
              this.gomesaliDiv=false;
              this.gassDiv=true;
              this.nirmalDiv=false;
              this.bhaugaonDiv=false;
            }
          },
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'निर्मळ',
          value: 'nirmal',
          handler: data => {
            console.log('OK clicked. Data -> ' ,data.value);
            if(data.value=='nirmal'){
              this.nandakhalDiv=false;
              this.agashiDiv=false;
              this.sherlaiDiv=false;
              this.rajodiDiv=false;
              this.nanbhatDiv=false;
              this.bolinjDiv=false;
              this.umraleDiv=false;
              this.mardesDiv=false;
              this.gomesaliDiv=false;
              this.gassDiv=false;
              this.nirmalDiv=true;
              this.bhaugaonDiv=false;
            }
          },
        },{
          name: 'radio5',
          type: 'radio',
          label: 'भुईगाव',
          value: 'bhaugaon',
          handler: data => {
            console.log('OK clicked. Data -> ' ,data.value);
            if(data.value=='bhaugaon'){
              this.nandakhalDiv=false;
              this.agashiDiv=false;
              this.sherlaiDiv=false;
              this.rajodiDiv=false;
              this.nanbhatDiv=false;
              this.bolinjDiv=false;
              this.umraleDiv=false;
              this.mardesDiv=false;
              this.gomesaliDiv=false;
              this.gassDiv=false;
              this.nirmalDiv=false;
              this.bhaugaonDiv=true;
            }
          },
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            console.log("ok clicked")
          }
        }
      ]
    });
     
    await alert.present();
    
  }

  call(index){
    console.log("event>>>>",index)
    let tel_number = index
    window.open(`tel:${tel_number}`, '_system')
  
  }
  chat(index){
    console.log("event>>>>",index)
    let tel_number = index
    window.open(`sms:${tel_number}?body=My Name is ${this.localUserData.username} and Im from ${this.localUserData.userParish} Parish,my village is ${this.localUserData.userVillage} and my Mobile No. is ${this.localUserData.userPhone} Can You Please Call me back because I cant reach You on Call...   Thankyou`, '_system')
  }

}

