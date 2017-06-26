import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HocModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HocModule.configureHOC({
      showLoading: true
    })
  ],
  bootstrap: [
    DemoComponent
  ]
})
export class DemoModule {}