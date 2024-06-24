import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { AddTutorialComponent } from "../components/add-tutorial/add-tutorial.component";
import { TutorialDetailsComponent } from "../components/tutorial-details/tutorial-details.component";
import { TutorialsListComponent } from "../components/tutorials-list/tutorials-list.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'tutorials', component: TutorialsListComponent },
    { path: 'tutorials/:id', component: TutorialDetailsComponent },
    { path: 'add', component: AddTutorialComponent },
    {path:'home',component: HomeComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })              
  export class AppRoutingModule { }
  