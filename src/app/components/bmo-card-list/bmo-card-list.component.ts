import { Component, OnInit } from '@angular/core';
import { BmoCard } from 'src/app/models/bmo-card.models';
import { DatabaseService } from 'src/app/shared/database.service';

@Component({
  selector: 'app-bmo-card-list',
  templateUrl: './bmo-card-list.component.html',
  styleUrls: ['./bmo-card-list.component.scss']
})
export class BmoCardListComponent implements OnInit {

  bmoCardList: BmoCard[] = [];

  // Le constructor s'éxécute en premier dans le cycle de vie du composant
  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.dbService.getBmoCards().subscribe(bmoCards => {
      this.bmoCardList = bmoCards;
    });
  }

}
