import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  template: `
    <div></div>
  `
})
export class HocComponent {

  @Input() data: Observable<any>;
  @Output() dataLoaded = new EventEmitter();
  @Output() error = new EventEmitter();

  public isLoading = true;

  constructor() {}

  public unwrapData() {
    this.data.subscribe(
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

}
