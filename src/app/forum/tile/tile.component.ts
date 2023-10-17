import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faComments } from '@fortawesome/free-solid-svg-icons';

import { throwError } from 'rxjs';
import {CommentService} from "../comment/comment.service";
import {PostService} from "../../service/post.service";
import {ReactionService} from "../../service/reaction.service";

@Component({
  selector: 'app-tile',
  templateUrl: 'tile.component.html',
  styleUrls: ['tile.component.css']
})
export class TileComponent implements OnInit {

  faComments = faComments;
  @Input() posts!: any[];
  @Input() postToUpdate: any;
  @Output() updateObjectEvent = new EventEmitter<any>();



  reactions: any[] = [];

  // tslint:disable-next-line:max-line-length
  constructor(private commentService: CommentService, private router: Router, private postService: PostService, private reactService: ReactionService) { }

  ngOnInit(): void {
  }

  goToPost(id: number): void {
    this.router.navigateByUrl('/viewpost/' + id);
  }

  deletePost(id: number): void{
    this.postService.deletePost(id).subscribe((data) => {
      window.location.reload();
    }, error => {
      throwError(error);
    });

  }
  deleteComment(id: number): void{
    this.commentService.deleteComment(id).subscribe((data) => {
      window.location.reload();
    }, error => {
      throwError(error);
    });

  }
  reactHAHA(id: number): void{
    this.reactService.reactHAHA(id).subscribe((data) => {
    }, error => {
      throwError(error);
    });

  }

  reactLIKE(id: number): void{
    this.reactService.reactLIKE(id).subscribe((data) => {
    }, error => {
      throwError(error);
    });

  }
  reactDISLIKE(id: number): void{
    this.reactService.reactDISLIKE(id).subscribe((data) => {
    }, error => {
      throwError(error);
    });

  }
  reactLOVE(id: number): void{
    this.reactService.reactLOVE(id).subscribe((data) => {
    }, error => {
      throwError(error);
    });

  }
  reactWOW(id: number): void{
    this.reactService.WOW(id).subscribe((data: any) => {
    },(error: any) => {
      throwError(error);
    });

  }

  getReactionsPost(id: number): void{
    this.postService.getReactionsPost(id).subscribe((data) => {
      this.reactions = data;
    }, error => {
      throwError(error);
    });

  }



  getCount(name: any): number {
    return this.reactions.filter(o => o.reactionType === name).length;
  }

  updateObject(object: any): void {
    this.updateObjectEvent.emit(object);
    this.router.navigate(['/update-post']);
  }
}
