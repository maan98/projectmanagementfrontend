import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { Project } from '../project';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {
  updated:boolean=false;
   projectToUpdate:Project=new Project();
   projectId:number;
  constructor(private dataService:DataServiceService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>this.projectId=params['id'])
    this.dataService.getProjectById(this.projectId).subscribe(project=>this.projectToUpdate=project);
  }
  updateDetails(){
       this.dataService.updateProject(this.projectToUpdate).subscribe(project=>this.projectToUpdate=project);
       alert('details updated');

       this.updated=true;
  }

}
