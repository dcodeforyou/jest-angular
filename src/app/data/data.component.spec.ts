import { HttpErrorResponse } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { MockService } from '../services/mock.service';

import { DataComponent } from './data.component';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let fakeServiceMock: any;

  beforeEach(async () => {
    fakeServiceMock = {
      getDataVal: jest.fn()
    }
    await TestBed.configureTestingModule({
      declarations: [ DataComponent ],
      providers: [
        {
          provide: MockService,
          useValue: fakeServiceMock
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges(); - not before every test case
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test getServiceData set serviceData', () => {
    const expRes = {
      name: 'Jest response'
    }
    jest.spyOn(fakeServiceMock, 'getDataVal').mockReturnValue(of(expRes));
    fixture.detectChanges(); // trigger ngOnInit and from there getService data will be called
    expect(component.serviceData.name).toBe(expRes.name);
  })

  it('should test getServiceData set errorMessage', () => {
    const errRes = new HttpErrorResponse({
      error: '404 not found',
      status: 404,
      statusText: 'Not Found'
    })
    jest.spyOn(fakeServiceMock, 'getDataVal').mockReturnValue(throwError(() => errRes));
    fixture.detectChanges(); // trigger ngOnInit and from there getService data will be called
    expect(component.errorMessage).toBe('Not Found');
  })

  it('should se greeting to Good Morning', () => {
    const expRes = {
      name: 'Jest response',
      time: 9
    }
    jest.spyOn(fakeServiceMock, 'getDataVal').mockReturnValue(of(expRes));
    fixture.detectChanges(); // trigger ngOnInit and from there getService data will be called
    expect(component.greeting).toBe('Good Morning');
  })

  it('should se greeting to Good Day', () => {
    const expRes = {
      name: 'Jest response',
      time: 15
    }
    jest.spyOn(fakeServiceMock, 'getDataVal').mockReturnValue(of(expRes));
    fixture.detectChanges(); // trigger ngOnInit and from there getService data will be called
    expect(component.greeting).toBe('Good Day');
  })

  it('should se greeting to Good Evening', () => {
    const expRes = {
      name: 'Jest response',
      time: 22
    }
    jest.spyOn(fakeServiceMock, 'getDataVal').mockReturnValue(of(expRes));
    fixture.detectChanges(); // trigger ngOnInit and from there getService data will be called
    expect(component.greeting).toBe('Good Evening');
  })
});
