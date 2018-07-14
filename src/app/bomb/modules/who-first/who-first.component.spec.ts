import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoFirstComponent } from './who-first.component';

describe('WhoFirstComponent', () => {
  let component: WhoFirstComponent;
  let fixture: ComponentFixture<WhoFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
