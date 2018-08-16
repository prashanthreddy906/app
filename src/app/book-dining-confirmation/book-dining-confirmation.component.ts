import { Component, OnInit } from '@angular/core';
import { Guest } from "../components/Entity/guest";
import {ActivatedRoute} from '@angular/router';
import {Dining} from '../components/Entity/dining';
import { AppService } from "../app.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-dining-confirmation',
  templateUrl: './book-dining-confirmation.component.html',
  styleUrls: ['./book-dining-confirmation.component.css']
})
export class BookDiningConfirmationComponent implements OnInit {
 guest=new Guest();
diningId:string;
dining=new Dining();
  constructor(private route:ActivatedRoute,private appService: AppService,private router:Router) { 
    this.diningId = route.snapshot.params['id'];
  }

  ngOnInit() {
     this.guest=<Guest>JSON.parse(window.localStorage.getItem("guest"));
   if(this.guest==null){
        this.router.navigate(['/login']);
     }
      this.getResult()
  }
getResult(){
  this.appService.getDiningData(this.diningId).subscribe(data=>{
  this.dining=<Dining>JSON.parse(JSON.stringify(data));
},error=>{

});
}
 cancelDining(id){
 this.appService.cancelDining(id).subscribe(data => {
      alert("Dining cancelled Succesfully");
      this.getResult();
    }, error => {
      alert("Dining cancellation failed!!!");
    });
  }
 
}
