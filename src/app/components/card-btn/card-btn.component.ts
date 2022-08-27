import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-btn',
  templateUrl: './card-btn.component.html',
  styleUrls: ['./card-btn.component.scss']
})
export class CardBtnComponent implements OnInit {

  @Input() cardChildBtnText: string = ""; 
  @Input() isDifferent: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
