import { Injectable } from '@angular/core';
import { Cards } from './types/card';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  cards: Cards[] = [
    {
      gameCover: 'assets/bt-bad-company-2.jpg',
      gamePrice: 'R$ 19,90',
      gameLabel: 'Digital',
      gameType: 'DIGITAL | PS2 | PS3 | PS4',
    },
    {
      gameCover: 'assets/bt-hardline.jpg',
      gamePrice: 'R$ 349,90',
      gameLabel: 'Digital',
      gameType: 'DIGITAL | PS3 | PS4',
    },
    {
      gameCover: 'assets/bt-4.jpg',
      gamePrice: 'R$ 59,90',
      gameLabel: 'CROSSPLAY',
      gameType: 'PS4 | CROSSPLAY',
    },
    {
      gameCover: 'assets/bt-5.jpg',
      gameLabel: 'Exclusive',
      gamePrice: 'R$ 99,90',
      gameType: 'DIGITAL | PS4 | PS5',
    },
    {
      gameCover: 'assets/ac-cover.jpg',
      gameLabel: 'GOTY',
      gamePrice: 'R$ 599,90',
      gameType: 'DIGITAL | PS5',
    },
    {
      gameCover: 'assets/bt-1.jpg',
      gameLabel: 'CROSSPLAY',
      gamePrice: 'R$ 599,90',
      gameType: 'DIGITAL | PS4 | CROSSPLAY | PS5',
    },
  ];
  constructor() {}

  getCards() {
    return this.cards;
  }
}
