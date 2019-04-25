import { TestBed } from '@angular/core/testing';

import { ColeccionMusicaService } from './coleccion-musica.service';

describe('ColeccionMusicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColeccionMusicaService = TestBed.get(ColeccionMusicaService);
    expect(service).toBeTruthy();
  });
});
