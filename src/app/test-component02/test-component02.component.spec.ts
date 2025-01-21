import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent02Component } from './test-component02.component';

describe('TestComponent02Component', () => {
  let component: TestComponent02Component;
  let fixture: ComponentFixture<TestComponent02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
