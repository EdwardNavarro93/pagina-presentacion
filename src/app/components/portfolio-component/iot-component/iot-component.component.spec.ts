import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IotComponentComponent } from './iot-component.component';

describe('IotComponentComponent', () => {
  let component: IotComponentComponent;
  let fixture: ComponentFixture<IotComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IotComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IotComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
