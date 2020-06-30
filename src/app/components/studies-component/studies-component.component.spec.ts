import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesComponentComponent } from './studies-component.component';

describe('StudiesComponentComponent', () => {
  let component: StudiesComponentComponent;
  let fixture: ComponentFixture<StudiesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
