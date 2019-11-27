import { Component, OnInit } from "@angular/core";
import { ProjectService } from "./project.service";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"]
})
export class ProjectComponent implements OnInit {
  objectKeys = Object.keys;
  projectService: ProjectService;
  projects;

  constructor(projectService: ProjectService) {
    this.projectService = projectService;
    this.projects = projectService.getProjects();
  }

  ngOnInit() {}
}
