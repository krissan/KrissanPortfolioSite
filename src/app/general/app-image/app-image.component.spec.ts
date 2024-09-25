import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppImageComponent } from './app-image.component';

describe('AppImageComponent', () => {
  let component: AppImageComponent;
  let fixture: ComponentFixture<AppImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
