import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
      
  }

  registerForm = new FormGroup({
    firstname: new FormControl("A"),
    lastname: new FormControl(""),
    email: new FormControl(""),
    mobile: new FormControl(""),
    gender: new FormControl(""),
    pwd: new FormControl(""),
    rpwd: new FormControl("")

  });

  registerSubmited(){
    console.log(this.registerForm);
  }
}

