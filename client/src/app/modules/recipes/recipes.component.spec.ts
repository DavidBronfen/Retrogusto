import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { IRecipes } from '../../models/recipes';
import { RecipesComponent } from './recipes.component';
import { RecipesService } from '../../services/recipes.service';
import { reducer } from '../../reducers';

const RECIPES_OBJECT: IRecipes[] = [{
  id: 3,
  title: 'דושפרה: מרק בוכרי שהוא ארוחה שלמה',
  image_path: 'data/recipes/img/dushpara.jpg',
  rating: 4.5,
  description: 'דושפרה הוא אחד המרקים הנפוצים והמוכרים במטבח הבוכרי. כמרק מחמם ומשביע הוא מציע, מעבר לכיסונים שמעניקים לו את שמו, גם ',
  prep_time: '2.5 שעות',
  portions: 6,
  calories: 465
}];

class MockRecipes {

  public getRecipes(): Observable<IRecipes[]> {
    return Observable.of(RECIPES_OBJECT);
  }
}

describe('RecipesComponent', () => {
  let component: RecipesComponent;
  let fixture: ComponentFixture<RecipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesComponent ],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            params: Observable.of({ categoryName: 'breakfast' })
          }
        },
        { provide: RecipesService, useClass: MockRecipes }
      ],
      imports: [
        StoreModule.provideStore(reducer),
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
