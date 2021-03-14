import { TestBed } from '@angular/core/testing';

import { PhotoListingService } from './photo-listing.service';

describe('PhotoListingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoListingService = TestBed.get(PhotoListingService);
    expect(service).toBeTruthy();
  });
});
