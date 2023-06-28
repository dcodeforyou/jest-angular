import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynchronousComponent } from './asynchronous.component';

describe('AsynchronousComponent', () => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');
  let component: AsynchronousComponent;
  let fixture: ComponentFixture<AsynchronousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsynchronousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsynchronousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test setTimeout', () => {
    component.checkSetTimeout();
    expect(component.setTimeoutRes).not.toBe('setTimeoutChecked');

    // jest.advanceTimersByTime(1000); - when timout is known
    jest.runAllTimers(); // when timeout not known
    expect(component.setTimeoutRes).toBe('setTimeoutChecked');
  })
});
