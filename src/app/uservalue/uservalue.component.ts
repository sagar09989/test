import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uservalue',
  templateUrl: './uservalue.component.html',
  styleUrls: ['./uservalue.component.css']
})
export class UservalueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  userdetails = [
    {name:'anil',email:'anil@gmail.com'},
    {name:'pankaj',email:'pankaj@gmail.com'},
    {name:'chirag',email:'chirag@gmail.com'},
    {name:'jignesh',email:'jignesh@gmail.com'},
  ];
}
