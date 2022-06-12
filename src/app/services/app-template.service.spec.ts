import { TestBed } from '@angular/core/testing';

import { AppTemplateService } from './app-template.service';

describe('AppTemplateService', () => {
  let service: AppTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
