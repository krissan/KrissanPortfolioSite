import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSectionComponent } from './standard-section.component';

describe('StandardSectionComponent', () => {
  let component: StandardSectionComponent;
  let fixture: ComponentFixture<StandardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
