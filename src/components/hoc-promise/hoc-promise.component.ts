import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { HocConfig } from './../../models';
import { HocConfigToken } from './../../tokens';
import { HocComponent } from './../hoc/hoc.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hoc-promise',
  template: `
    <div *ngIf="isLoading && showLoading">
      LOADING
    </div>
    <ng-content *ngIf="!isLoading"></ng-content>
  `
})
export class HocPromiseComponent extends HocComponent
  implements OnInit, OnDestroy {
  /**
   *
   *
   * @type {Observable<any>}
   * @memberof HocComponent
   */
  @Input() public dataSource: Promise<any>;

  constructor(@Inject(HocConfigToken) public config: HocConfig) {
    super(config);
  }

  ngOnInit() {
    this.unwrapData();
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  private _loadData() {
    this.dataSource.then(data => {}).catch(error => {});
  }
}
