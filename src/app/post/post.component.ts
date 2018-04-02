import { Component, OnInit } from '@angular/core';
import { PostService} from '../post.service';
import { Post } from '../post.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService]
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  submitForm(title: string, user: string, timestamp: string, subreddit: string, image: string) {
    console.log(title);
   var newPost: Post = new Post(title, user, timestamp, subreddit, image);
   this.postService.addPost(newPost);
 }

}
