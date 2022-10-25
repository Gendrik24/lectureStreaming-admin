import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadcastOverviewComponent } from './broadcast-overview.component';

describe('BroadcastOverviewComponent', () => {
  let component: BroadcastOverviewComponent;
  let fixture: ComponentFixture<BroadcastOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BroadcastOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BroadcastOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
