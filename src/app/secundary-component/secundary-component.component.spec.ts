import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecundaryComponentComponent } from './secundary-component.component';

describe('SecundaryComponentComponent', () => {
  let component: SecundaryComponentComponent;
  let fixture: ComponentFixture<SecundaryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecundaryComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecundaryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
