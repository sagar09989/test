import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor() { 
  }

  ngOnInit(): void {
  }
  userdata:any={};
  getdata(data:NgForm){
    console.warn(data);   
    this.userdata=data;
  }
}
