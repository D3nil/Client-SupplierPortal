import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTempFornitoreComponent } from './create-temp-fornitore.component';

describe('CreateTempFornitoreComponent', () => {
  let component: CreateTempFornitoreComponent;
  let fixture: ComponentFixture<CreateTempFornitoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTempFornitoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTempFornitoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
