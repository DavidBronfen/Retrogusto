import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {

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
        http.get('data/categories.json').subscribe();

        backend.expectOne({
          url: 'data/categories.json',
          method: 'GET'
        });
      })
    )
  );
});
