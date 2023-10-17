import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import {ReactionService} from "../../service/reaction.service";
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-fordash',
  templateUrl: './fordash.component.html',
  styleUrls: ['./fordash.component.css']
})
export class FordashComponent implements OnInit {
  posts: Array<any> = [];

  constructor(private postService: PostService,private reactService : ReactionService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(post => {
      this.posts = post;
    });
  }


  getReactionsPostandTypeLIKE(id: number):any{

    this.reactService.getReactionsPostAndType(id,'LIKE').subscribe((data) => {
      console.log("for id:",id,"Likes :",data)
      return data;

    }, error => {
      throwError(error);
    })

  }

  getReactionsPostandTypeANGRY(id: number):any{

    this.reactService.getReactionsPostAndType(id,'ANGRY').subscribe((data) => {
      return data;

    }, error => {
      throwError(error);
    })

  }

  getReactionsPostandTypeDISLIKE(id: number):any{

    this.reactService.getReactionsPostAndType(id,'DISLIKE').subscribe((data) => {
      return data;

    }, error => {
      throwError(error);
    })

  }

  getReactionsPostandTypeLOVE(id: number):any{

    this.reactService.getReactionsPostAndType(id,'LOVE').subscribe((data) => {
      return data;

    }, error => {
      throwError(error);
    })

  }


  getReactionsPostandTypeWOW(id: number):any{

    this.reactService.getReactionsPostAndType(id,'WOW').subscribe((data) => {
      return data;

    }, error => {
      throwError(error);
    })

  }


}
