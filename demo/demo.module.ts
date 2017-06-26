import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HocModule } from '../src';
import { DemoComponent } from './demo.component';
import { DemoService } from './demo.service';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HocModule
  ],
  providers: [
    DemoService
  ],
  bootstrap: [
    DemoComponent
  ]
})
export class DemoModule {}