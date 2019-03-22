import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveProgComponent } from './reactive-prog.component';

describe('ReactiveProgComponent', () => {
  let component: ReactiveProgComponent;
  let fixture: ComponentFixture<ReactiveProgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveProgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
