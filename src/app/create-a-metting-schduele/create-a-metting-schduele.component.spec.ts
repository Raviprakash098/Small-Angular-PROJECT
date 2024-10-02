import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAMettingSchdueleComponent } from './create-a-metting-schduele.component';

describe('CreateAMettingSchdueleComponent', () => {
  let component: CreateAMettingSchdueleComponent;
  let fixture: ComponentFixture<CreateAMettingSchdueleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAMettingSchdueleComponent]
    });
    fixture = TestBed.createComponent(CreateAMettingSchdueleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
