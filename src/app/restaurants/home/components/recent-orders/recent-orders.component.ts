import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-recent-orders',
  standalone: true,
  imports: [
    NgForOf,
    MatIcon
  ],
  templateUrl: './recent-orders.component.html',
  styleUrl: './recent-orders.component.css'
})
export class RecentOrdersComponent {
  orders = [
    {
      id: '0001',
      status: 'Sent',
      team: 'Legends'
    },
    {
      id: '0002',
      status: 'Sent',
      team: 'Treasure'
    }
  ];
}
