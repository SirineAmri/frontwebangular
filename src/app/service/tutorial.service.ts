import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:9094/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id:any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data:any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  // @ts-ignore
  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id:any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title:any): Observable<any> {
    return this.http.get(`${baseUrl}?title=${title}`);
  }
}
