import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CategoriesService } from './categories.service';

describe('Categories Service', () => {
  let injector: TestBed;
  let service: CategoriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [ CategoriesService ]
    });
    injector = getTestBed();
    service = injector.get(CategoriesService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('get categories', () => {
    const dummyCategory = [{
      'id': 1,
      'name_he': 'ארוחת בוקר',
      'name_en': 'breakfast',
      'image_path': 'data/categories/breakfast.png'
    }];

    service.getCategories().subscribe(categories => {
      expect(categories).toBe(dummyCategory);
    });

    const req = httpMock.expectOne(`${service._categoriesUrl}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCategory);
  });

});
