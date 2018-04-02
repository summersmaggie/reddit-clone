import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(title: string, user: string, timestamp: string, subreddit: string, image: string) {
   var newPost: Post = new Post(title, user, timestamp, subreddit, image);
   console.log(newPost);
 }

}
