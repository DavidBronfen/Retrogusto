import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { RecipesService } from './recipes.service';

describe('RecipesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [
        RecipesService,
        {
          provide: Http,
          useFactory: (mockBackend, options) => {
            return new Http(mockBackend, options);
          },
          deps: [ MockBackend, BaseRequestOptions ]
        },
        MockBackend,
        BaseRequestOptions,
      ]
    });
  });

  it('should be created', inject([RecipesService], (service: RecipesService) => {
    expect(service).toBeTruthy();
  }));
});
