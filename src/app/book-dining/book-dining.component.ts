import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Http, Response } from '@angular/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from "../app.service";
import { Guest } from "../components/Entity/guest";
import { Router } from '@angular/router';
import {Dining} from '../components/Entity/dining';
@Component({
  selector: 'app-book-dining',
  templateUrl: './book-dining.component.html',
  styleUrls: ['./book-dining.component.css']
})
export class BookDiningComponent implements OnInit {
 bookDiningForm: FormGroup;
   guest=new Guest();
   dining = new Dining();
    today = new Date();
minDate :any;
   constructor (private http: Http,private appService: AppService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
         let date=JSON.stringify(this.today);
    this.minDate ={year: +date.substring(1,5), month: +date.substring(6,8), day:  +date.substring(9,11)};
     this.guest=<Guest>JSON.parse(window.localStorage.getItem("guest"));
      if(this.guest==null){
        this.router.navigate(['/login']);
     }
      this.bookDiningForm = this.formBuilder.group({
      diningType: new FormControl('breakfast', [Validators.required]),
      date: new FormControl('', [Validators.required]),
         time: new FormControl('7am-11am', [Validators.required]),
          numberOfGuests: new FormControl('1', [Validators.required])
    });

  }
  book(){
    this.bookDiningForm.patchValue({date: this.bookDiningForm.controls['date'].value.year+'-'+this.bookDiningForm.controls['date'].value.month+'-'+this.bookDiningForm.controls['date'].value.day});
    this.appService.bookDining(this.bookDiningForm.value,this.guest.guestId).subscribe(data => {
      this.dining=<Dining>JSON.parse(JSON.stringify(data));
      alert("Dining booking done succesfully");
        this.router.navigate(['/BookDiningConfirmation',this.dining.dReservationNumber]);
      this.reset();
    }, error => {
      alert("Booking Dining failed!!!");
    });
  }
reset() {
    this.bookDiningForm.reset();
  }

}
