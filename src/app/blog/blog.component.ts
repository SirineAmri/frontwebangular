import { Component, OnInit } from '@angular/core';
import {PostService} from "../service/post.service"

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Array<any> = [];

  constructor(private postService: PostService) {

    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    });
  }


  ngOnInit(): void {

  }
}
