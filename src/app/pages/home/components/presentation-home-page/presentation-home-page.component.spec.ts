import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationHomePageComponent } from './presentation-home-page.component';

describe('PresentationHomePageComponent', () => {
  let component: PresentationHomePageComponent;
  let fixture: ComponentFixture<PresentationHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
