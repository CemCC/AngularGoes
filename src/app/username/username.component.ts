import { Component, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  name : string = '';
  noValue : boolean = false;
  constructor() { }

  ngOnInit() {
  }



  resetText() {
    this.name = '';
    
  }

}
