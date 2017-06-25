import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ICategory } from './category';
import { Observable } from 'rxjs/Observable';

import { CategoriesComponent } from './categories.component';

const CATEGORIES_OBJECT: ICategory[] = new Category(1, 'ארוחת בוקר', 'data/categories/breakfast.png');

class MockCategory {

  public getCategories(): Observable<ICategory[]> {
    return Observable.of(CATEGORIES_OBJECT);
  }
}

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesComponent ],
      providers: [
      { provide: CategoriesService, useClass: MockCategory }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
