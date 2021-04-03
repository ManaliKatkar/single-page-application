import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieTicketList } from './movie-ticket-list.component';

describe('MovieTicketList', () => {
  let component: MovieTicketList;
  let fixture: ComponentFixture<MovieTicketList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieTicketList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieTicketList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
