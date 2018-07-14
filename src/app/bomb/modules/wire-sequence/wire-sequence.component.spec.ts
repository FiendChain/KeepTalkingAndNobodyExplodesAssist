import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WireSequenceComponent } from './wire-sequence.component';

describe('WireSequenceComponent', () => {
  let component: WireSequenceComponent;
  let fixture: ComponentFixture<WireSequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WireSequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WireSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
