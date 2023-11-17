import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-global',
  template: '<div style="background: blue; color: white; height: 30px">{{globalVar}}</div>',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent {
  globalVar: any;

  constructor(private appService: AppService) {
    this.globalVar = 'appService.globalVariable';
  }
}
