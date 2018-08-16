import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookResortConfirmationComponent } from './book-resort-confirmation.component';

describe('BookResortConfirmationComponent', () => {
  let component: BookResortConfirmationComponent;
  let fixture: ComponentFixture<BookResortConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookResortConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookResortConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
