import { TestBed } from '@angular/core/testing';

import { MovieTicketsList } from './movie-ticket.service';

describe('MovieTicketsList', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieTicketsList = TestBed.get(MovieTicketsList);
    expect(service).toBeTruthy();
  });
});
