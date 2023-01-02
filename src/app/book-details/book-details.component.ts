import { Component, HostListener, OnInit } from '@angular/core';
import { BookService } from '../book.service';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  order: boolean = false;
  autherDetails: any;
  lists: any;

  isShow: boolean = false;
  topPosToStartShowing = 100;

  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.bookService.getList().subscribe((res: any) => {
      this.autherDetails = res.data;
      this.lists = res.data.books.slice();
    });
  }

  sort(key: string) {
    this.order = !this.order;
    this.lists.sort((n1: any, n2: any) => {
      return (this.order) ? n1[key].localeCompare(n2[key]) : n2[key].localeCompare(n1[key]);
    });
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}

