import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProdComponent } from './show-prod.component';

describe('ShowProdComponent', () => {
  let component: ShowProdComponent;
  let fixture: ComponentFixture<ShowProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
