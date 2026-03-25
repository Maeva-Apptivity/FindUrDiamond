import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondCardComponent } from './diamond-card.component';

describe('DiamondCardComponent', () => {
  let component: DiamondCardComponent;
  let fixture: ComponentFixture<DiamondCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiamondCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiamondCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
