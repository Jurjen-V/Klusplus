import { Component, OnInit } from '@angular/core';
import {user} from '../users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user = user;
  constructor() { }

  ngOnInit() {
  }

}
