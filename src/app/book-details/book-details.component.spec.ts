import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookService } from '../book.service';

import { BookDetailsComponent } from './book-details.component';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let service: BookService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [BookDetailsComponent]
    })
      .compileComponents();
    service = TestBed.inject(BookService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getList', () => {
    expect(component.getList).toBeDefined();
  });

  it('should call sort', () => {
    expect(component.sort).toBeDefined();
  });

  it('should scroll to top', () => {
    expect(component.scrollToTop).toBeDefined();
  });
});
