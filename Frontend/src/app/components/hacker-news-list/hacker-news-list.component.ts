import { Component, OnInit } from '@angular/core';
import { hackerNews } from 'src/app/interfaces/hacker-news';
import { HackerNewsService } from '../../services/hacker-news.service';


@Component({
  selector: 'app-hacker-news-list',
  templateUrl: './hacker-news-list.component.html',
  styleUrls: ['./hacker-news-list.component.css'],
})
export class HackerNewsListComponent implements OnInit {
  News: hackerNews[]= [];
  constructor(private hackernewsservices: HackerNewsService) {}

  ngOnInit(): void {
    this.gethackernews();
  }
  ngAfterViewInit(): void {
    this.gethackernews2();
  }


  gethackernews() {
    this.hackernewsservices.gethackernews().subscribe(
      (res) => this.News = res,
    );
  }
  gethackernews2() {
    this.hackernewsservices.getHackernews2().subscribe(
      (res) => this.News = res,
    );
  }
  deleteNews(id: any) {
    this.hackernewsservices.deleteNews(id).subscribe(
      (res) => {
        console.log(res);
        this.gethackernews2();
      },
    );
  }
}
