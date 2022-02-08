import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable, of } from 'rxjs';
import { POSTS } from './mock-posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(): Observable<Post[]> {
    const posts = of(POSTS);
    return posts;
  }

  getPost(id: number): Observable<Post> {
    const post = POSTS.find(h => h.id === id)!;
    return of(post);
  }
}
