import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEnemyTestComponent } from './app.enemy.test.component';

describe('AppEnemyTestComponent', () => {
  let component: AppEnemyTestComponent;
  let fixture: ComponentFixture<AppEnemyTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppEnemyTestComponent]
    });
    fixture = TestBed.createComponent(AppEnemyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
