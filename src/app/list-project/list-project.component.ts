import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Project } from '../project';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {
  projects:Project[];
  projectId:number;
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getAllProjects().subscribe(projects=>this.projects=projects);
  }
  deleteProject(id:number){
    alert('press ok to confirm')
    this.dataService.deleteProject(id).subscribe(projects=>this.projects=projects);
  }

}
