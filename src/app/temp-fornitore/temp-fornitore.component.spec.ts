import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempFornitoreComponent } from './temp-fornitore.component';

describe('TempFornitoreComponent', () => {
  let component: TempFornitoreComponent;
  let fixture: ComponentFixture<TempFornitoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempFornitoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempFornitoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
