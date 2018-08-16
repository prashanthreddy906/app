import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from '../password-validation';
import { AppService } from "../../app.service";
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  resortForm: FormGroup;
  email: string = "";
  firstName: string = "";
  lastName: string = "";
  address: string = "";
  phone: number;
  //    password: '',
  //    confirmPassword: '',

  constructor(private appService: AppService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.resortForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      address: new FormControl('', [Validators.maxLength(255)]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.maxLength(20)])
    },
      {
        validator: PasswordValidation.MatchPassword
      })
  }

  onSubmit() {
    const request = {
      email: this.resortForm.value.email,
    }
    this.appService.save(this.resortForm.value).subscribe(data => {
      alert("Registered Succesfully");
      this.reset();
    }, error => {
      alert("Registration failed!!!");
    });
    //  console.log(this.resortForm)
    //  localStorage.setItem('registration', this.resortForm.value.email);
  }
  reset() {
    this.resortForm.reset();
  }
}

