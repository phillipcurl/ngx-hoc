import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HocComponent } from './../hoc/hoc.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hoc-item',
  template: `
    <div *ngIf="item | async; let item; else loading">
    </div>
    <ng-template #loading>
      LOADING
    </ng-template>
  `
})
export class HocItemComponent extends HocComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.unwrapData();
  }

}
