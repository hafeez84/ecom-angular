import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoggedin: boolean;

  constructor() { }

  ngOnInit() {
    this.userLoggedin = false;
  }

}
