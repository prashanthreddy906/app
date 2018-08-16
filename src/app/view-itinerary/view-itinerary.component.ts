import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";
import { Guest } from "../components/Entity/guest";
import {Resort  } from "../components/Entity/resort";
import {Dining  } from "../components/Entity/dining";
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-itinerary',
  templateUrl: './view-itinerary.component.html',
  styleUrls: ['./view-itinerary.component.css']
})
export class ViewItineraryComponent implements OnInit {
guestId:string;
  guest=new Guest();
  resortList: Resort[] = [];
  diningList: Dining[] = [];
    login=false;
  constructor(private appService: AppService,private router:Router ) {
   }

  ngOnInit() {
    this.getGuest();
  }
 
  getGuest(){
// this.appService.getGuest(this.guestId).subscribe(data=>{
  this.guest=<Guest>JSON.parse(window.localStorage.getItem("guest"));
   if(this.guest==null){
        this.router.navigate(['/login']);
     }
// },error=>{
  console.log(JSON.stringify(this.guest));
    this.getViewData();
// });
  }
  getViewData(){
this.appService.getViewData(this.guest.guestId).subscribe(data=>{
this.resortList=[];
this.diningList=[];
this.resortList=<any[]>JSON.parse(JSON.stringify(data[0]));
this.diningList=<any[]>JSON.parse(JSON.stringify(data[1]));
},error=>{

});
  }
  cancelDining(id){
 this.appService.cancelDining(id).subscribe(data => {
      alert("Dining cancelled Succesfully");
         this.getViewData();
    }, error => {
      alert("Dining cancellation failed!!!");
    });
  }
  cancelResort(id){
 this.appService.cancelDining(id).subscribe(data => {
      alert("Resort cancelled Succesfully");
         this.getViewData();
    }, error => {
      alert("Resort cancellation failed!!!");
    });
  }
}
