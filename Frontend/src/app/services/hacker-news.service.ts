import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { hackerNews } from '../interfaces/hacker-news';
@Injectable({
  providedIn: 'root',
})
export class HackerNewsService {
  baseUrl = 'http://localhost:3000/hacker-news';
  constructor(private http: HttpClient) {}

  gethackernews(): Observable<hackerNews[]> {
    return this.http.get<hackerNews[]>(`${this.baseUrl}/api-hnews`);
  }

  getHackernews2(): Observable<hackerNews[]> {
    return this.http.get<hackerNews[]>(`${this.baseUrl}/hacker-newsver`);
  }
  deleteNews(id: any): Observable<hackerNews> {
    return this.http.delete<hackerNews>(`${this.baseUrl}/delete?Id=${id}`);
  }
}
