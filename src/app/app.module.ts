import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { CardBtnComponent } from './components/card-btn/card-btn.component';
import { HttpClientModule } from '@angular/common/http';

// PrimeNG
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { BmoCardListComponent } from './components/bmo-card-list/bmo-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent,
    CardBtnComponent,
    BmoCardListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // PrimeNG
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
