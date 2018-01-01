import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RecipesService } from './recipes.service';

describe('RecipesService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
    });
  });

  it('should issue a request',
    async(
      inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController) => {
        http.get('data/recipes.json').subscribe();

        backend.expectOne({
          url: 'data/recipes.json',
          method: 'GET'
        });
      })
    )
  );
});
