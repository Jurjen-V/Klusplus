import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DIYComponent } from './diy.component';

describe('DIYComponent', () => {
  let component: DIYComponent;
  let fixture: ComponentFixture<DIYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DIYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DIYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
