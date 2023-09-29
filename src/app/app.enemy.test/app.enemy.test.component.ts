import {AfterViewInit, Component, ElementRef, ViewChild, ViewRef} from '@angular/core';
import {EnemyMovement} from "../../AngularClasses/enemy-movement";
import {Point} from "../../AngularClasses/point";

@Component({
  selector: 'app-enemy-test',
  templateUrl: './app.enemy.test.component.html',
  styleUrls: ['./app.enemy.test.component.css']
})
export class AppEnemyTestComponent implements AfterViewInit{
@ViewChild('EnemyImg') _enemyImg: ElementRef;
_movement?: EnemyMovement;

public constructor() {
  this._enemyImg = ViewChild("EnemyImg")
  this._movement = undefined;
}

  ngAfterViewInit(): void {
    console.log("X=", this._enemyImg.nativeElement.x);
    console.log("Y=", this._enemyImg.nativeElement.y);

    console.log("Style=", this._enemyImg.nativeElement.style);
    //console.log("Y=", this._enemyImg.nativeElement.setPosition(200, 100));

    let pageWidth:number = window.innerWidth;
    let pageHeight:number = window.innerHeight;

    console.log("pageWidth=", pageWidth, "pageHeight=", pageHeight);

    this._movement = new EnemyMovement(
      1,
      new Point(pageWidth/2, pageHeight/2),
      new Point(50,50));

    setInterval(function (_this:AppEnemyTestComponent, pageWidth:number, pageHeight:number) {

      if (_this._movement?.IsEnemyOutOfScreen()){
        _this._movement?.RestartMovement()
      }

      _this._movement?.Move()
      _this._movement?.ApplyPosition(_this._enemyImg.nativeElement.style)



    }, 40, this, pageWidth, pageHeight);
  }


}
