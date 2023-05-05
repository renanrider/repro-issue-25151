import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Page1Component } from './page1/page1.component';
import { AppComponent } from './app.component';
import { Page2Component } from './page2/page2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'page-one', component: Page1Component },
  { path: 'page-two', component: Page2Component },
];

@NgModule({
  declarations: [AppComponent, Page1Component, Page2Component],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
