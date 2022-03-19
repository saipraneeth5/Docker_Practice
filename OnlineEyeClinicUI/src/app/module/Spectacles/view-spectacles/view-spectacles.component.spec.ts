import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpectaclesComponent } from './view-spectacles.component';

describe('ViewSpectaclesComponent', () => {
  let component: ViewSpectaclesComponent;
  let fixture: ComponentFixture<ViewSpectaclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSpectaclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpectaclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
