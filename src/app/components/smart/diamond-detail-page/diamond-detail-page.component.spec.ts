import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondDetailPageComponent } from './diamond-detail-page.component';

describe('DiamondDetailPageComponent', () => {
  let component: DiamondDetailPageComponent;
  let fixture: ComponentFixture<DiamondDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiamondDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiamondDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
