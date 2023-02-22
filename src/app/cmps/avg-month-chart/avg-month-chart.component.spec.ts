import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgMonthChartComponent } from './avg-month-chart.component';

describe('AvgMonthChartComponent', () => {
  let component: AvgMonthChartComponent;
  let fixture: ComponentFixture<AvgMonthChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgMonthChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvgMonthChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
