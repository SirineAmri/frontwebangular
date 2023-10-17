import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {CreatePostPayload} from "../forum/create-post/create-post.payload";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://localhost:9094/forum/post');
  }

  createPost(postPayload: CreatePostPayload): Observable<any> {
    return this.http.post('http://localhost:9094/forum/post', postPayload);
  }

  updatePost(postPayload: any): Observable<any> {
    return this.http.put('http://localhost:9094/forum/post', postPayload);
  }

  getPost(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:9094/forum/post/byId/' + id);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete<any>('http://localhost:9094/forum/post/' + id);
  }

  // getAllPostsByUser(name: string): Observable<any[]> {
  //   return this.http.get<any[]>('http://localhost:9000/api/posts/by-user/' + name);
  // }

  getReactionsPost(id: number): Observable<any> {
    return this.http.get<any>('http://localhost:9094/forum/reaction/post/' + id);
  }


}
