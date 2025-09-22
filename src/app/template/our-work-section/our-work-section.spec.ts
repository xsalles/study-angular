import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorkSection } from './our-work-section';

describe('OurWorkSection', () => {
  let component: OurWorkSection;
  let fixture: ComponentFixture<OurWorkSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurWorkSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurWorkSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
