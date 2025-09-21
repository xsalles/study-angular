import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWorksSection } from './how-works-section';

describe('HowWorksSection', () => {
  let component: HowWorksSection;
  let fixture: ComponentFixture<HowWorksSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowWorksSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowWorksSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
