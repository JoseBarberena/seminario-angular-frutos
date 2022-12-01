import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutosAboutComponent } from './frutos-about.component';

describe('FrutosAboutComponent', () => {
  let component: FrutosAboutComponent;
  let fixture: ComponentFixture<FrutosAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrutosAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrutosAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
