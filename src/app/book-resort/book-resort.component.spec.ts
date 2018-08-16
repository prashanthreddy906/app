import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookResortComponent } from './book-resort.component';

describe('BookResortComponent', () => {
  let component: BookResortComponent;
  let fixture: ComponentFixture<BookResortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookResortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookResortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
