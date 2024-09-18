import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverypointComponent } from './deliverypoint.component';

describe('DeliverypointComponent', () => {
  let component: DeliverypointComponent;
  let fixture: ComponentFixture<DeliverypointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliverypointComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverypointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
