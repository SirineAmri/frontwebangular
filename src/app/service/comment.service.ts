import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentPayload } from './comment.payload';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getAllCommentsForPost(postId: number): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:9094/forum/comment/post/' + postId);
  }

  postComment(postId: number, commentPayload: CommentPayload): Observable<any> {
    return this.httpClient.post<any>('http://localhost:9094/forum/comment/post/' + postId, commentPayload);
  }

  getReplyByComment(commentId: number): Observable<any> {
    return this.httpClient.get<any>('http://localhost:9094/forum/comment/comment/' + commentId);
  }
  deleteComment(id: number): Observable<any> {
    return this.httpClient.delete<any>('http://localhost:9094/forum/comment/' + id);
  }

}
