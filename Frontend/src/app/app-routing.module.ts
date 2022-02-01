import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HackerNewsListComponent } from './components/hacker-news-list/hacker-news-list.component';

const routes: Routes = [
  {
    path: '',
    component: HackerNewsListComponent,
  },
  {
    path: 'hackernews',
    component: HackerNewsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
