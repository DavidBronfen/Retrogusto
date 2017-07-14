import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { IRecipes } from '../../models/recipes';
import { RecipesComponent } from './recipes.component';
import { RecipesService } from '../../services/recipes.service';

const RECIPES_OBJECT: IRecipes[] = [{
  id: 3,
  title: 'דושפרה: מרק בוכרי שהוא ארוחה שלמה',
  image_path: 'data/img/recipes/dushpara/dushpara.jpg',
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
      ]
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
