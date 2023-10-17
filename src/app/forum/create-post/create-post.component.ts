import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { CreatePostPayload } from './create-post.payload';
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-create-post',
  templateUrl: '/create-post.component.html',
  styleUrls: ['/create-post.component.css']
})
export class CreatePostComponent implements OnInit {


  createPostForm!: FormGroup;
  postPayload: any;
  postPayloadU!: CreatePostPayload;
  paramValue: any;
  postToUpdate: any;
  update: boolean = false;
  constructor(private router: Router, private postService: PostService,private route: ActivatedRoute) {
    this.postPayload = {
      name: '',
      description: '',
    };
  }

  ngOnInit() {
    this.createPostForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });

    if (this.route.snapshot.paramMap.has('id')) {
      // @ts-ignore
      if(this.route.params['id']!='0'){
        this.update=true;
        this.route.params.subscribe(params => {
          this.paramValue = params['id'];
          this.getPostById(this.paramValue);
          console.log("to update",this.postToUpdate)
        })
      };
    }


  }
  updatePost() {
    this.postPayloadU.name = this.createPostForm.get('name')!.value;
    this.postPayloadU.description = this.createPostForm.get('description')!.value;
    this.postPayloadU.id =  this.paramValue;

    this.postService.updatePost(this.postPayload).subscribe((data) => {
      this.router.navigateByUrl('/');
    }, error => {
      throwError(error);
    });
  }
  // tslint:disable-next-line:typedef
  createPost() {
    this.postPayload.name = this.createPostForm.get('name')!.value;
    this.postPayload.description = this.createPostForm.get('description')!.value;

    this.postService.createPost(this.postPayload).subscribe((data) => {
      this.router.navigateByUrl('/');
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
