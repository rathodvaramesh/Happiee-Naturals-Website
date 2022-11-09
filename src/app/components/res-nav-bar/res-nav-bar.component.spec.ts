import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResNavBarComponent } from './res-nav-bar.component';

describe('ResNavBarComponent', () => {
  let component: ResNavBarComponent;
  let fixture: ComponentFixture<ResNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
