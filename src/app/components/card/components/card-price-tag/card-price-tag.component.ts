import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-price-tag',
  templateUrl: './card-price-tag.component.html',
  styleUrls: ['./card-price-tag.component.scss'],
})
export class CardPriceTagComponent {
  @Input()
  gameType: string = '';
  @Input()
  gamePrice: string = '';
}
