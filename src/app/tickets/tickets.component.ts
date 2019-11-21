import { Component, OnInit } from '@angular/core';
import { tickets } from '../tickets'

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  tickets = tickets;
  constructor() { }

  ngOnInit() {
  }

}
