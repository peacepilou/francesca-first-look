import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  cardList: Card[] = [
    new Card("Card 1", "Desc 1", "Btn 1", false),
    new Card("Card 2", "Desc 2", "Btn 2", true),
    new Card("Card 3", "Desc 3", "Btn 3", false)
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
