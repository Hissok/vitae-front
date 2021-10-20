import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsManagerComponent } from './dialogs-manager.component';

describe('DialogsManagerComponent', () => {
  let component: DialogsManagerComponent;
  let fixture: ComponentFixture<DialogsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
