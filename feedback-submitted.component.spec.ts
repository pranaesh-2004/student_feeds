import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackSubmittedComponent } from './feedback-submitted.component';

describe('FeedbackSubmittedComponent', () => {
  let component: FeedbackSubmittedComponent;
  let fixture: ComponentFixture<FeedbackSubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackSubmittedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
