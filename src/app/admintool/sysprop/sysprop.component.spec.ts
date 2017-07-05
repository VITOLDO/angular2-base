import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyspropComponent } from './sysprop.component';

describe('SyspropComponent', () => {
  let component: SyspropComponent;
  let fixture: ComponentFixture<SyspropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyspropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyspropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
