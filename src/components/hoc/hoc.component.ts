import {
  Component,
  OnChanges,
  Inject,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { HocConfig } from './../../models';
import { HocConfigToken } from './../../tokens';

@Component({
  template: ``
})
export class HocComponent implements OnChanges {
  /**
   *
   *
   * @type {Observable<any>}
   * @memberof HocComponent
   */
  @Input() public data: Observable<any>;

  /**
   *
   *
   * @type {boolean}
   * @memberof HocComponent
   */
  @Input() public showLoading: boolean = this._config.showLoading;

  /**
   *
   *
   * @type {EventEmitter<any>}
   * @memberof HocComponent
   */
  @Output() public dataLoaded: EventEmitter<any> = new EventEmitter();

  /**
   *
   *
   * @type {EventEmitter<any>}
   * @memberof HocComponent
   */
  @Output() public dataUpdated: EventEmitter<any> = new EventEmitter();

  /**
   *
   *
   * @type {EventEmitter<Error>}
   * @memberof HocComponent
   */
  @Output() public error: EventEmitter<Error> = new EventEmitter();

  /**
   *
   *
   * @type {boolean}
   * @memberof HocComponent
   */
  public isLoading: boolean = true;

  /**
   *
   *
   * @type {Subject<void>}
   * @memberof HocComponent
   */
  public ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(@Inject(HocConfigToken) public _config: HocConfig) {}

  /**
   *
   *
   * @param {*} changes 
   * @memberof HocComponent
   */
  public ngOnChanges(changes: any) {
    this.unwrapData();
  }

  /**
   *
   *
   * @param {boolean} [isUpdate=false] 
   * @memberof HocComponent
   */
  public unwrapData(isUpdate: boolean = false) {
    this.data.takeUntil(this.ngUnsubscribe).subscribe(
      data => {
        if (isUpdate) {
          this.dataUpdated.emit(data);
        } else {
          this.dataLoaded.emit(data);
        }
        this.isLoading = false;
      },
      error => {
        this.error.emit(new Error(error));
        this.isLoading = false;
      }
    );
  }

  /**
   *
   *
   * @memberof HocComponent
   */
  public unsubscribe() {
    this._unsubscribe();
  }

  /**
   *
   *
   * @private
   * @memberof HocComponent
   */
  private _unsubscribe() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
