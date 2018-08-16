import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDiningComponent } from './book-dining.component';

describe('BookDiningComponent', () => {
  let component: BookDiningComponent;
  let fixture: ComponentFixture<BookDiningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDiningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
