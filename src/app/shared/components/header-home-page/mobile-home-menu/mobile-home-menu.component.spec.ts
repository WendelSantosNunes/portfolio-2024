import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHomeMenuComponent } from './mobile-home-menu.component';

describe('MobileHomeMenuComponent', () => {
  let component: MobileHomeMenuComponent;
  let fixture: ComponentFixture<MobileHomeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileHomeMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileHomeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
