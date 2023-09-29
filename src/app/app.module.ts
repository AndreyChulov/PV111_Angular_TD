import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppTowerComponent } from './app-tower/app-tower.component';
import {NgOptimizedImage} from "@angular/common";
import { AppEnemyTestComponent } from './app.enemy.test/app.enemy.test.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTowerComponent,
    AppEnemyTestComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
