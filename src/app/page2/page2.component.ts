import { Component, OnInit } from '@angular/core';
import Epub from 'epubjs';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})
export class Page2Component {
  book: any;
  rendition: any;
  ngOnInit() {
    this.book = Epub('https://s3.amazonaws.com/epubjs/books/alice.epub');
    this.rendition = this.book.renderTo('area', { flow: 'scrolled-doc' });
    var displayed = this.rendition.display();
    console.log(displayed);
  }
}
