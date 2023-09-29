import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTowerComponent } from './app-tower.component';

describe('AppTowerComponent', () => {
  let component: AppTowerComponent;
  let fixture: ComponentFixture<AppTowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppTowerComponent]
    });
    fixture = TestBed.createComponent(AppTowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
