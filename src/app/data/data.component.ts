import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }
@Input() item = 0;
  ngOnInit(): void {
  }


}
