import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqTesComponent } from './faq-tes.component';

describe('FaqTesComponent', () => {
  let component: FaqTesComponent;
  let fixture: ComponentFixture<FaqTesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaqTesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqTesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
