import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() cardChild: Card = new Card("", "", "", false);
  firstname: string = "";

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes["cardChild"]); 
  }

  ngOnInit(): void {
    console.log("coucou");
    this.firstname = "Antoine";
  }

}
