import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekBundleComponent } from './week-bundle.component';

describe('WeekBundleComponent', () => {
  let component: WeekBundleComponent;
  let fixture: ComponentFixture<WeekBundleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeekBundleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
