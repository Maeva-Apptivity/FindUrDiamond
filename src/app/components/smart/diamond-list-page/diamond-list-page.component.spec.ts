import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondListPageComponent } from './diamond-list-page.component';

describe('DiamondListPageComponent', () => {
  let component: DiamondListPageComponent;
  let fixture: ComponentFixture<DiamondListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiamondListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiamondListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
