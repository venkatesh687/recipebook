import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesstartComponent } from './recipesstart.component';

describe('RecipesstartComponent', () => {
  let component: RecipesstartComponent;
  let fixture: ComponentFixture<RecipesstartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesstartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
