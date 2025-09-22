import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCtaSection } from './second-cta-section';

describe('SecondCtaSection', () => {
  let component: SecondCtaSection;
  let fixture: ComponentFixture<SecondCtaSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondCtaSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondCtaSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
