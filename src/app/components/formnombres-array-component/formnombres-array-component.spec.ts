import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormnombresArrayComponent } from './formnombres-array-component';

describe('FormnombresArrayComponent', () => {
  let component: FormnombresArrayComponent;
  let fixture: ComponentFixture<FormnombresArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormnombresArrayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormnombresArrayComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
