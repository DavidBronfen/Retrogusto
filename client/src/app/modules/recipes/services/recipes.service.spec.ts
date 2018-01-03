import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RecipesService } from './recipes.service';

describe('Recipes Service', () => {
  let injector: TestBed;
  let service: RecipesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [ RecipesService ]
    });
    injector = getTestBed();
    service = injector.get(RecipesService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('get recipes', () => {
    const dummyRecipe = [{
      'id': 1,
      'title': 'מרק ריבולטה טוסקני',
      'image_path': 'data/recipes/img/ribollita.jpg',
      'rating': 4,
      // tslint:disable-next-line:max-line-length
      'description': 'ריבולטה הוא המרק הטוסקני המפורסם ביותר שהלכה למעשה מדובר בנזיד המורכב מירקות ולחם. השפית לירז שדה (מבראסרי עין כרם) מציעה את',
      'prep_time': '2.5',
      'portions': 8,
      'calories': 460
    }];

    service.getRecipes().subscribe(recipe => {
      expect(recipe).toBe(dummyRecipe);
    });

    const req = httpMock.expectOne(`${service.envBackend}/api/recipes/`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyRecipe);
  });

});
