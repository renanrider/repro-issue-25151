import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'repro-issue-25151';
  isSideNavCollapsed = false;
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  onToggle(data: any): void {
    console.log(data);
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed) {
      styleClass = 'body-trimmed';
    } else if (
      this.collapsed &&
      this.screenWidth > 768 &&
      this.screenWidth > 0
    ) {
      styleClass = 'body-md-screen';
    }

    return styleClass;
  }
}
