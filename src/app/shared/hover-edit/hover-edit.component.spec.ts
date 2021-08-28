import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverEditComponent } from './hover-edit.component';

describe('HoverEditComponent', () => {
  let component: HoverEditComponent;
  let fixture: ComponentFixture<HoverEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
