import { inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { Observable } from 'rxjs/Rx';
import { HocObservableComponent } from '../src/components/hoc-observable/hoc-observable.component';
import { HocModule } from '../src';

describe('hoc-observable component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HocModule]
    });
  });

  it('should load', () => {
    const fixture: ComponentFixture<
      HocObservableComponent
    > = TestBed.createComponent(HocObservableComponent);
    fixture.componentInstance.data = Observable.from([
      { id: 0 },
      { id: 1 },
      { id: 2 }
    ]);
    fixture.detectChanges();
    // expect(fixture.nativeElement.innerHTML.trim()).to.equal('Hello world from the <%- projectTitle %> module!');
  });
});
