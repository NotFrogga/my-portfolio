import { Component, OnInit } from "@angular/core";
import { ProjectComponent } from "../project/project.component";
import { ProjectService } from "../project/project.service";

@Component({
  selector: "app-projects-page",
  templateUrl: "./projects-page.component.html",
  styleUrls: ["./projects-page.component.scss"]
})
export class ProjectsPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
