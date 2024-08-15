import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsHomePageComponent } from './skills-home-page.component';

describe('SkillsHomePageComponent', () => {
  let component: SkillsHomePageComponent;
  let fixture: ComponentFixture<SkillsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
