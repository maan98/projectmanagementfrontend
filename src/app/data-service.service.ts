import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  url='http://localhost:8080/'
  constructor(private http:HttpClient) { }
  getAllProjects():Observable <any>{
     return this.http.get(this.url.concat('/projects'));
  }
  getProjectById(id:number):Observable <any>{
    let appndurl=this.url.concat('/projects/')+id+'';
    return this.http.get(appndurl);
  }
  createProject(project:Project):Observable<any>{
        return this.http.post(this.url.concat('/projects/'),project);
  }
  updateProject(project:Project):Observable<any>{
    return this.http.put(this.url.concat('/projects/'),project);
    
  }
  deleteProject(id:number):Observable<any>{
    let appndurl=this.url.concat('/projects/afterDelete/')+id+'';
    return this.http.get(appndurl);
  }
}
