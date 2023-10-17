import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  constructor(private httpClient: HttpClient) { }

  getAllCommentsForPost(postId: number): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:9094/api/comment/post/' + postId);
  }

  postComment(commentPayload: any, commentPayload1: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:9094/api/comments/', commentPayload);
  }

  deleteComment(id: number): Observable<any> {
    return this.httpClient.delete<any>('http://localhost:9094/forum/comments/' + id);
  }


}
