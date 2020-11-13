import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';

const routes: Routes = [{path:"",redirectTo:'/dashboard','pathMatch':'full'

},{path:'dashboard',component:DashboardComponent},{path:'list-project',component:ListProjectComponent},
{path:'add-project',component:AddProjectComponent},
{path:'update-project/:id',component:UpdateProjectComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
