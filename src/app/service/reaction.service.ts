import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactionService {

  constructor(private httpClient: HttpClient) { }

  HAHA: any = {reactionType: "HAHA",entity:"POST"};
  LIKE: any = {reactionType: "LIKE",entity:"POST"};
  WOW: any = {reactionType: "WOW",entity:"POST"};
  LOVE: any = {reactionType: "LOVE",entity:"POST"};
  ANGRY: any = {reactionType: "ANGRY",entity:"POST"};
  DISLIKE: any = {reactionType: "DISLIKE",entity:"POST"};



  reactHAHA(postId : number): Observable<any> {
    return this.httpClient.post<any>('http://localhost:9094/forum/reaction/post/'+ postId, this.HAHA);
  }
  reactLIKE(postId : number): Observable<any> {
    return this.httpClient.post<any>('http://localhost:9094/forum/reaction/post/'+ postId, this.LIKE);
  }
  reactDISLIKE(postId : number): Observable<any> {
    return this.httpClient.post<any>('http://localhost:9094/forum/reaction/post/'+ postId, this.DISLIKE);
  }
  reactLOVE(postId : number): Observable<any> {
    return this.httpClient.post<any>('http://localhost:9094/forum/reaction/post/'+ postId, this.LOVE);
  }
  reactWOW(postId : number): Observable<any> {
    return this.httpClient.post<any>('http://localhost:9094/forum/reaction/post/'+ postId, this.WOW);
  }
  reactANGRY(postId : number): Observable<any> {
    return this.httpClient.post<any>('http://localhost:9094/forum/reaction/post/'+ postId, this.ANGRY);
  }

  getReactionsPostAndType(postId: number,type:String): Observable<any> {
    return this.httpClient.get<any>('http://localhost:9094/forum/reaction/post/'+postId+'/type/'+type);
  }
}
