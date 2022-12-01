import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFrutosComponent } from './lista-frutos.component';

describe('ListaFrutosComponent', () => {
  let component: ListaFrutosComponent;
  let fixture: ComponentFixture<ListaFrutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFrutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFrutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
