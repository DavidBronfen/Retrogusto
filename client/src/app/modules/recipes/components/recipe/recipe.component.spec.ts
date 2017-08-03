import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RecipeComponent } from './recipe.component';

describe('RecipeComponent', () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeComponent);
    component = fixture.componentInstance;
    component.recipe = {
      id: 3,
      title: 'דושפרה: מרק בוכרי שהוא ארוחה שלמה',
      image_path: 'data/recipes/img/dushpara.jpg',
      rating: 4.5,
      description: 'דושפרה הוא אחד המרקים הנפוצים והמוכרים במטבח הבוכרי. כמרק מחמם ומשביע הוא מציע, מעבר לכיסונים שמעניקים לו את שמו, גם ',
      prep_time: '2.5 שעות',
      portions: 6,
      calories: 465
    }
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
