import { Component, OnInit } from '@angular/core';
import { diy } from '../diy1';

@Component({
  selector: 'app-diy',
  templateUrl: './diy.component.html',
  styleUrls: ['./diy.component.scss']
})
export class DIYComponent implements OnInit {
  diy = diy;
  constructor() { }

  ngOnInit() {
  }

}
