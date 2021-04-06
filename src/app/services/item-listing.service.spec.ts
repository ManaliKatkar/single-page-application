import { TestBed } from '@angular/core/testing';

import { ItemListingService } from './item-listing.service';

describe('ItemListingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemListingService = TestBed.get(ItemListingService);
    expect(service).toBeTruthy();
  });
});
