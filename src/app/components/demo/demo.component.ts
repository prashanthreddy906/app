import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from "../../app.service";
@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})


export class DemoComponent implements OnInit {
  loginForm: FormGroup;
  isFailed = false;
  constructor(private appService: AppService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(50)])
    });
  }
  login() {
    this.appService.login(this.loginForm.value).subscribe(data => {
      window.localStorage.setItem("guest",JSON.stringify(data));
      this.router.navigate(['/ViewItinerary']);
      this.isFailed = false;
    }, error => {
      this.isFailed = true;
        window.localStorage.setItem("guest",null);
    })

  }
}

