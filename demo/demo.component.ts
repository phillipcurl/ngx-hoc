import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { DemoService } from './demo.service';

@Component({
  selector: 'hoc-demo-app',
  template: `
    <button (click)="this.data$ = this.service.callRedditApi()"
            class="f6 link dim ba b--green ph3 pv2 mb2 dib green bg-white">
      Reload Data
    </button>
    <hoc-observable [data]="data$"
                    [showLoading]="true"
                    (dataLoaded)="data = $event"
                    (dataUpdated)="data = $event">
      <div *ngFor="let user of data" class="mv4">
        {{ user.name }} {{ user.surname }}
      </div>
    </hoc-observable>
  `
})
export class DemoComponent implements OnInit {

  data: any[];
  data$: Observable<any>;

  constructor(
    public service: DemoService
  ) { }

  ngOnInit() {
    this.data$ = this.service.callRedditApi();
  }

}
