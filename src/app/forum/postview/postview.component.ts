import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import {ReactionService} from "../../service/reaction.service";
import {CommentService} from "../comment/comment.service";
import {PostService} from "../../service/post.service";


@Component({
  selector: 'app-postview',
  templateUrl: './postview.component.html',
  styleUrls: ['./postview.component.css']
})
export class PostviewComponent implements OnInit {
  postId: number;
  id!:number;
  post: any;
  commentForm: FormGroup;
  replyForm: FormGroup;

  commentPayload: any;
  comments!: any[];
  replies!: any[];
  HAHA: any;
  LIKE: any;
  WOW: any;
  LOVE: any;
  ANGRY: any;
  DISLIKE: any;
  // tslint:disable-next-line:max-line-length
  constructor(private postService: PostService, private commentService: CommentService, private router: Router , private activateRoute: ActivatedRoute , private reactService: ReactionService) {
    // @ts-ignore
    this.postId = this.activateRoute.snapshot.params.id;

    this.commentForm = new FormGroup({
      content: new FormControl('', Validators.required)
    });

    this.replyForm = new FormGroup({
      contentReply: new FormControl('', Validators.required)
    });
    this.commentPayload = {
      content: '',
      postId: this.postId
    };
  }

  ngOnInit(): void {
    this.getPostById();
    this.getCommentsForPost();
    this.getReactionsPostandType(this.postId);
  }
  reactHAHA(id: number): void {
    this.reactService.reactHAHA(id).subscribe((data) => {
      this.getReactionsPostandType(this.postId);

    }, error => {
      throwError(error);
    });

  }

  reactLIKE(id: number): void {
    this.reactService.reactLIKE(id).subscribe((data) => {
      this.getReactionsPostandType(this.postId);

    }, error => {
      throwError(error);
    });

  }

  reactDISLIKE(id: number): void {
    this.reactService.reactDISLIKE(id).subscribe((data) => {
      this.getReactionsPostandType(this.postId);

    }, error => {
      throwError(error);
    });

  }

  reactLOVE(id: number): void {
    this.reactService.reactLOVE(id).subscribe((data) => {
      this.getReactionsPostandType(this.postId);

    }, error => {
      throwError(error);
    });

  }

  reactWOW(id: number): void {
    this.reactService.WOW(id).subscribe((data: any) =>{
      this.getReactionsPostandType(this.postId);

    }, (error: any) =>  {
      throwError(error);
    });

  }

  getReactionsPostandType(id: number): void {
    this.reactService.getReactionsPostAndType(id, 'HAHA').subscribe((data) => {
      this.HAHA = data;
      console.log('haha', this.HAHA)
    }, error => {
      throwError(error);
    });
    this.reactService.getReactionsPostAndType(id, 'LIKE').subscribe((data) => {
      this.LIKE = data;
    }, error => {
      throwError(error);
    });
    this.reactService.getReactionsPostAndType(id, 'WOW').subscribe((data) => {
      this.WOW = data;
    }, error => {
      throwError(error);
    });
    this.reactService.getReactionsPostAndType(id, 'LOVE').subscribe((data) => {
      this.LOVE = data;
    }, error => {
      throwError(error);
    });
    this.reactService.getReactionsPostAndType(id, 'ANGRY').subscribe((data) => {
      this.ANGRY = data;
    }, error => {
      throwError(error);
    });
    this.reactService.getReactionsPostAndType(id, 'HAHA').subscribe((data) => {
      this.HAHA = data;
    }, error => {
      throwError(error);
    });
    this.reactService.getReactionsPostAndType(id, 'DISLIKE').subscribe((data) => {
      this.DISLIKE = data;
    }, error => {
      throwError(error);
    });

  }

  deleteComment(id: number): void {
    this.commentService.deleteComment(id).subscribe((data) => {
      window.location.reload();
    }, error => {
      throwError(error);
    });
  }

  // tslint:disable-next-line:typedef
  postComment() {
    this.commentPayload.content = this.commentForm.get('content')!.value;
    this.commentService.postComment(this.postId, this.commentPayload).subscribe(data => {
      this.commentForm.get('content')!.setValue('');
      this.getCommentsForPost();
    }, error => {
      throwError(error);
    });
  }

  // tslint:disable-next-line:typedef
  postReply() {
    this.commentService.postComment(this.postId, this.commentPayload).subscribe(data => {
      this.commentForm.get('content')!.setValue('');
      this.getCommentsForPost();
    }, error => {
      throwError(error);
    });
  }

  // tslint:disable-next-line:typedef
  getPostById() {
    this.postService.getPost(this.postId).subscribe(data => {
      this.post = data;
    }, error => {
      throwError(error);
    });
  }

  // tslint:disable-next-line:typedef
  private getCommentsForPost() {
    this.commentService.getAllCommentsForPost(this.postId).subscribe(data => {
      this.comments = data;
    }, error => {
      throwError(error);
    });
  }
}
