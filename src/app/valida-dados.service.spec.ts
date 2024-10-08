import { TestBed } from '@angular/core/testing';

import { ValidaDadosService } from './valida-dados.service';

describe('ValidaDadosService', () => {
  let service: ValidaDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidaDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
