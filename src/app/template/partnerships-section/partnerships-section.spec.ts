import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipsSection } from './partnerships-section';

describe('PartnershipsSection', () => {
  let component: PartnershipsSection;
  let fixture: ComponentFixture<PartnershipsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnershipsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnershipsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
