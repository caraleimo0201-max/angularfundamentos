import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsumarNumerosComponent } from './formsumar-numeros-component';

describe('FormsumarNumerosComponent', () => {
  let component: FormsumarNumerosComponent;
  let fixture: ComponentFixture<FormsumarNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsumarNumerosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsumarNumerosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
