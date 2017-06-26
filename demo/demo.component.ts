import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { DemoService } from "./demo.service";

@Component({
  selector: 'hoc-demo-app',
  template: `
    <section class="center mw5 mw6-ns">
      <hoc-list [data]="data$" 
                [showLoading]="true" 
                (dataLoaded)="data = $event">
        <article *ngFor="let currData of data" class="mv4">
          <span class="mr2">{{ currData.data.score }}</span>
          <span><a class="f4 fw6 black link hover-dark-red"
            href="{{ currData.data.url }}"
            target="_blank">
            {{ currData.data.title }}
          </a></span>
        </article>
      </hoc-list>
    </section>
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
