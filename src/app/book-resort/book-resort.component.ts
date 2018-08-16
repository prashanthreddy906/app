import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Http, Response } from '@angular/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from "../app.service";
import { Guest } from "../components/Entity/guest";
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import {Resort} from '../components/Entity/resort'
@Component({
  selector: 'app-book-resort',
  templateUrl: './book-resort.component.html',
  styleUrls: ['./book-resort.component.css']
})
export class BookResortComponent implements OnInit {
 bookResortForm: FormGroup;
   guest=new Guest();
   resort=new Resort();
   today = new Date();
minDate :any;
checkinDate:any;
   constructor (private http: Http,private appService: AppService, private formBuilder: FormBuilder, private router: Router,private datePipe: DatePipe) {
     
   }

  ngOnInit() {
 
      let date=JSON.stringify(this.today);
    this.minDate ={year: +date.substring(1,5), month: +date.substring(6,8), day:  +date.substring(9,11)};
     this.guest=<Guest>JSON.parse(window.localStorage.getItem("guest"));
     if(this.guest==null){
        this.router.navigate(['/login']);
     }
      this.bookResortForm = this.formBuilder.group({
      roomType: new FormControl('standarad', [Validators.required]),
      checkIn: new FormControl('', [Validators.required]),
         checkOut: new FormControl('', [Validators.required]),
          numberOfGuests: new FormControl('1', [Validators.required])
          // nights: new FormControl('1', [Validators.required])
    });

  }
  getDate(){
    this.checkinDate={year:this.bookResortForm.controls['checkIn'].value.year, month: this.bookResortForm.controls['checkIn'].value.month, day:  this.bookResortForm.controls['checkIn'].value.day};
     this.bookResortForm.patchValue({checkOut: this.bookResortForm.controls['checkIn'].value.year+'-'+this.bookResortForm.controls['checkIn'].value.month+'-'+this.bookResortForm.controls['checkIn'].value.day});
  }
  book(){
    this.bookResortForm.patchValue({checkIn: this.bookResortForm.controls['checkIn'].value.year+'-'+this.bookResortForm.controls['checkIn'].value.month+'-'+this.bookResortForm.controls['checkIn'].value.day});
     this.bookResortForm.patchValue({checkOut: this.bookResortForm.controls['checkOut'].value.year+'-'+this.bookResortForm.controls['checkOut'].value.month+'-'+this.bookResortForm.controls['checkOut'].value.day});
     this.appService.bookResort(this.bookResortForm.value,this.guest.guestId).subscribe(data => {
        this.resort=<Resort>JSON.parse(JSON.stringify(data));
      alert("Resort booking done Succesfully");
          this.router.navigate(['/BookResortConfirmation',this.resort.rReservationNumber]);
      this.reset();
    }, error => {
      alert("Resort Booking failed!!!");
    });
  }
reset() {
    this.bookResortForm.reset();
  }

}
