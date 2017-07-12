import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StoreModule } from '@ngrx/store';
import 'rxjs/add/observable/of';

import { ICategory } from '../../models/category';
import { CategoriesComponent } from './categories.component';
import { CategoriesService } from '../../services/categories.service';
import { reducer } from '../../reducers';

const CATEGORIES_OBJECT: ICategory[] = [{
  id: 1,
  name: 'ארוחת בוקר',
  image_path: 'data/categories/breakfast.png'
}];

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
      ],
      imports: [
        StoreModule.provideStore(reducer),
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
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
