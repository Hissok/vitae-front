import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwesomeDialogComponent } from './font-awesome-dialog.component';

describe('FontAwesomeDialogComponent', () => {
  let component: FontAwesomeDialogComponent;
  let fixture: ComponentFixture<FontAwesomeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontAwesomeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontAwesomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
