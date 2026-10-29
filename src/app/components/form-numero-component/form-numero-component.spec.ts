import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormNumeroComponent } from './form-numero-component';

describe('FormNumeroComponent', () => {
  let component: FormNumeroComponent;
  let fixture: ComponentFixture<FormNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormNumeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormNumeroComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
