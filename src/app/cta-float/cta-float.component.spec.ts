import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaFloatComponent } from './cta-float.component';

describe('CtaFloatComponent', () => {
  let component: CtaFloatComponent;
  let fixture: ComponentFixture<CtaFloatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CtaFloatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
