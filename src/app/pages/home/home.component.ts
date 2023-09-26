import { Cards } from 'src/app/types/card';
import { CardsService } from './../../cards.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cards: Cards[] = [];
  constructor(private readonly CardsService: CardsService) {}

  ngOnInit(): void {
    this.cards = this.CardsService.getCards();
  }
}
