import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorOverviewComponent } from './monitor-overview.component';

describe('MonitorOverviewComponent', () => {
  let component: MonitorOverviewComponent;
  let fixture: ComponentFixture<MonitorOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
