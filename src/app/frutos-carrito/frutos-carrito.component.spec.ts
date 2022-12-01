import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutosCarritoComponent } from './frutos-carrito.component';

describe('FrutosCarritoComponent', () => {
  let component: FrutosCarritoComponent;
  let fixture: ComponentFixture<FrutosCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrutosCarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrutosCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
