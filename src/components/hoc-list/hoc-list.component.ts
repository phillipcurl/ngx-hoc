import { Component, OnInit, OnDestroy, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/takeUntil';
import { HocConfig } from './../../models';
import { HocConfigToken } from './../../tokens';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'hoc-list',
  template: `
    <div *ngIf="isLoading && showLoading">
      LOADING
    </div>
    <ng-content *ngIf="!isLoading"></ng-content>
  `
})
export class HocListComponent implements OnInit, OnDestroy {

  @Input() public data: Observable<any>;
  @Input() public showLoading: boolean = this._config.showLoading;
  @Output() public dataLoaded: EventEmitter<any> = new EventEmitter<any>();
  @Output() public error = new EventEmitter();

  public isLoading = true;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    @Inject(HocConfigToken) private _config: HocConfig
  ) { }

  ngOnInit() {
    this.data
      .takeUntil(this.ngUnsubscribe)
      .subscribe(
        data => {
          this.dataLoaded.emit(data);
          this.isLoading = false;
          console.log(data);
        },
        error => {
          this.isLoading = false;
          this.error.emit(error);
          console.error(error);
        }
      );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
