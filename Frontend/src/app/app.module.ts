import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HackerNewsListComponent } from './components/hacker-news-list/hacker-news-list.component';
import { hackerNews } from './interfaces/hacker-news';


@NgModule({
  declarations: [
    AppComponent,
    HackerNewsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
