import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmoCardListComponent } from './bmo-card-list.component';

describe('BmoCardListComponent', () => {
  let component: BmoCardListComponent;
  let fixture: ComponentFixture<BmoCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmoCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmoCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
