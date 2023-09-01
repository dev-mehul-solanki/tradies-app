import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradiesComponent } from './tradies.component';

describe('TradiesComponent', () => {
  let component: TradiesComponent;
  let fixture: ComponentFixture<TradiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TradiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
