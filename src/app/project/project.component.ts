import { Component, OnInit } from "@angular/core";
<<<<<<< HEAD
=======
import { ProjectService } from './project.service';
>>>>>>> ea4e5bb... fix

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"]
})
export class ProjectComponent implements OnInit {
<<<<<<< HEAD
  constructor() {}

  ngOnInit() {}
=======
	objectKeys = Object.keys;
	projectService : ProjectService;
	projects;

	constructor(projectService : ProjectService) {
		this.projectService = projectService;
		this.projects = projectService.getProjects();
	}

	ngOnInit() {
		
	}
>>>>>>> ea4e5bb... fix
}
