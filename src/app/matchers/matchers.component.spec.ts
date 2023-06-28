import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //exact equality
  it('should check two plus two', () => {
    expect(2+2).toBe(4);
  });

  // object quality
  it('should check obj equality', () => {
    const obj = {name: 'JEST'}
    expect(obj).toEqual({name: 'JEST'});
  });

  // truthy
  it('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  it('zero', () => {
    const n = 0;
    expect(n).not.toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  })

  // numbers
  it('two plus two', () => {
    const val = 2 + 2;
    expect(val).toBeGreaterThan(3);
    expect(val).toBeGreaterThanOrEqual(3.5);
    expect(val).toBeLessThan(5);

    expect(val).toBe(4);
    expect(val).toEqual(4);
  });

  it('adding floating', () => {
    const val = 0.1 + 0.2;
    expect(val).toBeCloseTo(0.3);
  })

  // string
  it('no D in word', () => {
    expect('kicks').not.toMatch(/D/);
  })

  it('has "crew" in word', () => {
    expect('kickscrew').toMatch(/crew/);
  });

  // arrays and iterables
  it('contains milk in shopping list', () => {
    const shoppingList = [
      'basil',
      'pasta sauce',
      'buttermilk',
      'pen',
      'milk'
    ];
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  })

  // exception
  it('compiles error code', () => {
    expect(() => component.compileErrorCode()).toThrow();
    expect(() => component.compileErrorCode()).toThrow(Error);
    expect(() => component.compileErrorCode()).toThrowError();

    // check error message
    expect(() => component.compileErrorCode()).toThrow('you are using old angular');
    expect(() => component.compileErrorCode()).toThrow(/angular/)
  })

});
