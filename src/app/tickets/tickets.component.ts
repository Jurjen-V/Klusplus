import { Component, OnInit } from '@angular/core';
import { tickets } from '../Tickets'

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
