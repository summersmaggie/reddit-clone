import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Post } from '../post.model'

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
  providers: [PostService]
})
export class FrontPageComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

  getPosts() {
    return this.posts;
  }

}
