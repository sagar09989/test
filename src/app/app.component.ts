import { Component } from '@angular/core';
import{NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practicle project';
  name = 'manan naman';
  disable=false;
  getname(val:any){
    console.warn(val);
  }
  getnumber(name:any,sname:any){
    alert(name);
    alert(sname);
  }
  getdisplay='';
  getvalue(val:any){
    console.warn(val);
    this.getdisplay=val;

  }
  count =0;
  counter(type:string){
  type === 'add' ? this.count++ : this.count--;
  }

  show="true";
  color="red";
  day="sunday";
  users=['naman','raman','radha','kano','monil'];
  userdetails = [
    {name:'naman',email:'naman@gmail.com',city:'surat'},
    {name:'raman',email:'raman@gmail.com',city:'amd'},
    {name:'radha',email:'radha@gmail.com',city:'rjk'},
    {name:'kano',email:'kano@gmail.com',city:'delhi'},
    {name:'monil',email:'monil@gmail.com',city:'pune'},
  ];
  persons = [
    {name : 'pankaj',phone:1111,city:'surat',socialacounts:['facebook','twitter','insta'],study:'bca'},
    {name : 'nikunj',phone:2222,city:'amd',socialacounts:['linkedin','twitter','facebook'],study:'ca'},
    {name : 'manu',phone:3333,city:'rjk',socialacounts:['email','insta','twitter'],study:'mca'},
    {name : 'kunj',phone:4444,city:'delhi',socialacounts:['facebook','google','insta'],study:'bsc'}
  ];

  colorname="red";
  bgcolor="green";
  updatecolor(){
    this.colorname="blue";
    this.bgcolor="red";
  }
  display=true;
  toggle(){
    this.display=!this.display
    ;
  }


}
