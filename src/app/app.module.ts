import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { CardBtnComponent } from './components/card-btn/card-btn.component';

// PrimeNG
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent,
    CardBtnComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


    // PrimeNG
    CardModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
