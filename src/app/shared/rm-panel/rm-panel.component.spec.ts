import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmPanelComponent } from './rm-panel.component';

describe('RmPanelComponent', () => {
  let component: RmPanelComponent;
  let fixture: ComponentFixture<RmPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RmPanelComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
