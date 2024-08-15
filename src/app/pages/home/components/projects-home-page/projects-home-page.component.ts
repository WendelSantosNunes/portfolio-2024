import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/core/utils/projects';
import { Project } from 'src/app/shared/models/project';

@Component({
  selector: 'app-projects-home-page',
  templateUrl: './projects-home-page.component.html',
  styleUrls: ['./projects-home-page.component.scss']
})
export class ProjectsHomePageComponent implements OnInit {

  projectList: Project[] = Projects;

  constructor() { }

  ngOnInit(): void {
  }

}
