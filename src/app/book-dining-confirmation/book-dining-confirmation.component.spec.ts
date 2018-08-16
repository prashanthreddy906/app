import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDiningConfirmationComponent } from './book-dining-confirmation.component';

describe('BookDiningConfirmationComponent', () => {
  let component: BookDiningConfirmationComponent;
  let fixture: ComponentFixture<BookDiningConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDiningConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDiningConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
