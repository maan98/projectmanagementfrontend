import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Project } from '../project';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
   newproject:Project=new Project();
   addedProject:Project=new Project();
   isAdd=false;
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
  }
  addProject(){
    let projectReturned=this.dataService.createProject(this.newproject).subscribe(project=>this.addedProject=project);
    if(projectReturned!=null)
    alert('project added successfully');
    this.isAdd=true;
  }

}
