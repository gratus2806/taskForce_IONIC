import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.page.html',
  styleUrls: ['./doctor-info.page.scss'],
})
export class DoctorInfoPage implements OnInit {
  doctorDiv;
  bloodBankDiv;
  hWorkersDiv;
  ambulenceDiv;
  covidTestDiv;
  name="gratus b";
  doctor=[{
    name:"Dr.Shirish Sanjivani Hosp",
    phoneNo:"9890077427"
  
  },{
    name:"Dr. Pramod Sasalekar Bangli",
    phoneNo:"9823301880"
  
  },{
    name:"Dr.D.S.Saksena",
    phoneNo:"02502470331"
  
  },{
    name:"Dr.Anuj Platinum Hosp",
    phoneNo:"9320835502"
  
  },{
    name:"Dr.D.S.Saksena",
    phoneNo:"02502470331"
  
  },{
    name:"Dr.Jagdish Samant",
    phoneNo:"02502587389"
  
  }];

  covidTest=[{
    name:"विजयी नगर तुळुणज रुग्णालय",
    phoneNo:"9923249646"
  },{
    name:"सर डी.एम पेटिट वसई ",
    phoneNo:"8793750339"
  }];

  ambulance=[{
    name:"Viva Charitable Trust",
    phoneNo:"02502502421"
  
  },{
    name:"Arihanth Mitra Mandal",
    phoneNo:"02502502579"
  
  },{
    name:"Sanjeevini Hospital 1",
    phoneNo:"02502404264"
  
  },{
    name:"Sanjeevini Hospital 2",
    phoneNo:"02502402579"
  
  },{
    name:"Janaseva Trust Nallasopara ",
    phoneNo:"02502334780"
  
  },{
    name:"Shivseva Trust",
    phoneNo:"985000299"
  
  },{
    name:"VVCMC Department Office",
    phoneNo:"9326470163"
  
  },{
    name:"Cardinal Gracious Memo Hospital",
    phoneNo:"02502324220"
  
  },{
    name:"Cardinal Gracious Memo Hospital",
    phoneNo:"02502322686"
  
  },{
    name:"Sai Sanjivani cardiac Ambulance",
    phoneNo:"9220569182"
  
  }];
  bloodBank=[{
    name:"Sanjivani Hospital Blood Bank 1",
    phoneNo:"02502502229"
  },{
    name:"Sanjivani Hospital Blood Bank 2",
    phoneNo:"02502502284"
  },{
    name:"Vijayi Blood Bank 1",
    phoneNo:" 02506450250"
  },{
    name:"Vijayi Blood Bank 2",
    phoneNo:"02502321050"
  },{
    name:"Sarala Blood Bank 1",
    phoneNo:"02502332684"
  },{
    name:"Sarala Blood Bank 2",
    phoneNo:"02502349950"
  }]
  localUserData;

  constructor(public alertController: AlertController,private callNumber: CallNumber) { 
    // this.emergencyDetails()
    // console.log(this.nandakhal)
    if(localStorage.getItem('userData')!="" || localStorage.getItem('userData')!='null' || localStorage.getItem('userData')!='NULL'){
      this.localUserData = JSON.parse(localStorage.getItem('userData'));
      console.log("local storage",this.localUserData)
    }
    
  }

  ngOnInit() {
  }
  async emergencyDetails() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Select Parish',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'डॉक्टर ',
          value: 'doctor',
          handler: data => {
            console.log('OK clicked. Data -> ' ,data.value);
            if(data.value=='doctor'){
              this.doctorDiv=true;
              this.bloodBankDiv=false;
              this.hWorkersDiv=false;
              this.ambulenceDiv=false;
              this.covidTestDiv=false;
              
            }
          }
         
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'ब्लड बँक',
          value: 'bloodBank',
          handler: data => {
            console.log('OK clicked. Data -> ' ,data.value);
            if(data.value=='bloodBank'){
              this.doctorDiv=false;
              this.bloodBankDiv=true;
              this.hWorkersDiv=false;
              this.ambulenceDiv=false;
              this.covidTestDiv=false;
            }
          }
        },
        // {
        //   name: 'radio2',
        //   type: 'radio',
        //   label: 'हॉस्पिटल कर्मचारी ',
        //   value: 'hospital_Workers',
        //   handler: data => {
        //     console.log('OK clicked. Data -> ' ,data.value);
        //     if(data.value=='hospital_Workers'){
        //       this.doctorDiv=false;
        //       this.nurseDiv=false;
        //       this.hWorkersDiv=true;
        //       this.ambulenceDiv=false;
             
        //     }
        //   },
        // },
        {
          name: 'radio3',
          type: 'radio',
          label: ' ऍम्ब्युलन्स',
          value: 'ambulance',
          handler: data => {
            console.log('OK clicked. Data -> ' ,data.value);
            if(data.value=='ambulance'){
              this.doctorDiv=false;
              this.bloodBankDiv=false;
              this.hWorkersDiv=false;
              this.ambulenceDiv=true;
              this.covidTestDiv=false;
            }
          },
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'कॉवीड तपासणी केंद्र ',
          value: 'covidTest',
          handler: data => {
            console.log('OK clicked. Data -> ' ,data.value);
            if(data.value=='covidTest'){
              this.doctorDiv=false;
              this.bloodBankDiv=false;
              this.hWorkersDiv=false;
              this.ambulenceDiv=false;
              this.covidTestDiv=true;
            }
          },
        },
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
    window.open(`sms:${tel_number}?body=Hello Doctor My Name is ${this.localUserData.username} Im from ${this.localUserData.userParish} Parish and my village is ${this.localUserData.userVillage} my Mobile No. is ${this.localUserData.userPhone} Can You Please Call me back because I cant reach You on Call...   Thankyou`, '_system')
  }


}



