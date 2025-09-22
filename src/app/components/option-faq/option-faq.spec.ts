import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionFaq } from './option-faq';

describe('OptionFaq', () => {
  let component: OptionFaq;
  let fixture: ComponentFixture<OptionFaq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionFaq]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionFaq);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
