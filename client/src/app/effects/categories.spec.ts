import { TestBed, async, inject } from '@angular/core/testing';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';

import { CategoriesEffects } from './categories';
import { CategoriesService } from '../services/categories.service';

describe('Categories Effect', () => {

  const categoriesServiceStub = {};
  let runner: EffectsRunner;
  let categoriesEffects: CategoriesEffects;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      EffectsTestingModule
    ],
    providers: [
      CategoriesEffects,
      { provide: CategoriesService, useValue: categoriesServiceStub },
    ]
  }));

  beforeEach(inject([
      EffectsRunner, CategoriesEffects
    ],
    (_runner, _categoriesEffects) => {
      runner = _runner;
      categoriesEffects = _categoriesEffects;
    }
  ));

  it('should return a LOAD_CATEGORIES_SUCCESS action after LOAD_CATEGORIES', () => {
    runner.queue({ type: 'LOAD_CATEGORIES' });

    categoriesEffects.loadCategories$.subscribe(result => {
      expect(result).toEqual({ type: 'LOAD_CATEGORIES_SUCCESS' });
    });
  });
});
