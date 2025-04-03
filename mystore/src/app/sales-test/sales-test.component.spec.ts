import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTestComponent } from './sales-test.component';

describe('SalesTestComponent', () => {
  let component: SalesTestComponent;
  let fixture: ComponentFixture<SalesTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
