import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/core/utils/skills';
import { Skill } from 'src/app/shared/models/skill';

@Component({
  selector: 'app-skills-home-page',
  templateUrl: './skills-home-page.component.html',
  styleUrls: ['./skills-home-page.component.scss']
})
export class SkillsHomePageComponent implements OnInit {

  skillList: Skill[] = Skills;

  constructor() { }

  ngOnInit(): void {
  }

}
