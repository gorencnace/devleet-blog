import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {

  post?: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id).subscribe(post => this.post = post)
  }

}
