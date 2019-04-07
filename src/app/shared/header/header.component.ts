import { Component, OnInit, Input } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() pageTitle: string;
  @Input() iconTitle: string;
  counter = 0;
  userStatusColor = "warn";

  constructor(private _backendservice: BackendService) { }

  ngOnInit( ) {
    this._backendservice.getCardTotal().subscribe(
      (res) => {
        this.counter= res;
      }
    );
    this._backendservice.getUserStatus().subscribe(
      (res) => {
        this.userStatusColor = res ? "primary" : "warn";
      }
    );
  }

}
