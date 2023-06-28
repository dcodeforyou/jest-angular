// import { TestBed } from '@angular/core/testing';

import { HttpErrorResponse } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { MockService } from './mock.service';

describe('MockService', () => {
  let service: MockService;
  let httpClientSpy: any;

  beforeEach(() => {
    httpClientSpy = {
      get: jest.fn(),
      post: jest.fn()
    }
    service = new MockService(httpClientSpy);


    // TestBed.configureTestingModule({});
    // service = TestBed.inject(MockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getDataVal', () => {
    const res = "Jest Service Test";
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));

    service.getDataVal();
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  })

  it('should test getDataV2', (done) => {
    const res = "Jest Service Test";
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));

    service.getDataV2().subscribe(
      {
        next: data => {
          expect(data).toEqual(res);
          done();
        },
        error: err => console.log(err)
      }
    );
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  })

  it('should test getDataV2 thrown error', (done) => {
    const errRes = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found'
    });
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    jest.spyOn(httpClientSpy, 'get').mockReturnValue(throwError(() => errRes));

    service.getDataV2().subscribe(
      {
        next: data => console.log(data),
        error: error => {
          expect(error.message).toContain('test 404 error');
          done();
        }
      }
    );
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toHaveBeenCalledWith(url);
  })

  // POST
  it('should test postDataV1', () => {
    const body = "JEST Body";
    const res = "JESR Res";
    const url = "https://jsonplaceholder.typicode.com/todos/1";

    jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(res));
    service.postDataV1(body);
    expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
  })

  it('should test postDataV1 res', (done) => {
    const body = "JEST Body";
    const res = "JESR Res";
    const url = "https://jsonplaceholder.typicode.com/todos/1";

    jest.spyOn(httpClientSpy, 'post').mockReturnValue(of(res));
    service.postDataV1(body).subscribe({
      next: data => {
        expect(data).toEqual(res);
        done();
      },
      error: error => console.log(error)
    });
    expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
  })
});
