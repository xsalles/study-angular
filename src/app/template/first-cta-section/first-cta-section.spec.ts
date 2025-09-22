import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCtaSection } from './first-cta-section';

describe('FirstCtaSection', () => {
  let component: FirstCtaSection;
  let fixture: ComponentFixture<FirstCtaSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstCtaSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstCtaSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
