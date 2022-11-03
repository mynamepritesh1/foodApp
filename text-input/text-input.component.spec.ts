import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInpututComponent } from './text-input.component';

describe('TextInpututComponent', () => {
  let component: TextInpututComponent;
  let fixture: ComponentFixture<TextInpututComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextInpututComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextInpututComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
