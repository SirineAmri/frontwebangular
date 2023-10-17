import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { CreatePostPayload } from '../create-post/create-post.payload';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-update-post',
  templateUrl: "/update-post.component.html",
  styleUrls: ['/update-post.component.css']
})
export class UpdatePostComponent implements OnInit {


  createPostForm!: FormGroup;
  postPayload: any;
  postPayloadU: any;
  paramValue :any;
  postToUpdate:any;
  update : boolean = false;
  postId: any;
  constructor(private router: Router, private postService: PostService,private route: ActivatedRoute) {
    this.postPayload = {
      'name': '',
      'description': '',
    }

    this.postPayloadU = {
      'name': '',
      'description': '',
      'id': '',

    }
  }

  ngOnInit() {

    this.postId = this.route.snapshot.paramMap.get('id');
    this.getPostById(this.postId);
    this.createPostForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });

    this.createPostForm.setValue({
      name: this.postToUpdate.name,
      description: this.postToUpdate.description
    });


  }
  updatePost() {
    this.postPayloadU.name = this.createPostForm.get('name')!.value;
    this.postPayloadU.description = this.createPostForm.get('description')!.value;
    this.postPayloadU.id =  this.paramValue;

    this.postService.updatePost(this.postPayloadU).subscribe((data) => {
      this.router.navigateByUrl('/blog');
    }, error => {
      throwError(error);
    })
  }


  discardPost() {
    this.router.navigateByUrl('/');
  }

  getPostById(postId: number) {
    this.postService.getPost(postId).subscribe(data => {
      this.postToUpdate = data;
      this.createPostForm.patchValue(this.postToUpdate);

      console.log(postId,data,this.postToUpdate )
    }, error => {
      throwError(error);
    });
  }

}
