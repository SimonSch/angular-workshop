import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {SessionService} from "../auth/session.service";

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService, SessionService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should create the api service', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
