import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-reputation',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './reputation.component.html',
  styleUrl: './reputation.component.css'
})
export class ReputationComponent {
  info = {
    rating: 5,
    clients: 10
  };

  comments = [
    { id: 1, author: "Salina T.", text: "Such a good restaurant. I would love to order from here again soon! It was fast, and delicious." },
    { id: 2, author: "Michael R.", text: "I really enjoyed the meal. Yet I wish it was spicier, I will make sure to add a note next time, though." }
  ];

  renderStars(rating: number): string {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }

}
