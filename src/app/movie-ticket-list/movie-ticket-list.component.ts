import { KeyValue } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ChangeDetectorRef, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

// intenal imports
import { MovieTicketsList } from "../services/movie-ticket.service";
import { MovieTicketBooking, APP_LEVEL_CONSTANTS } from "../shared";

@Component({
  selector: "app-movie-ticket-list",
  templateUrl: "./movie-ticket-list.component.html",
  styleUrls: ["./movie-ticket-list.component.scss"],
})
export class MovieTicketList implements OnInit {
  @ViewChild("MatPaginatorCards", { static: false })
  paginatorForCards: MatPaginator;
  appLevelConstants = APP_LEVEL_CONSTANTS;
  displayedColumns = this.appLevelConstants.COLUMN_TITLE;

  ticketDetails: MatTableDataSource<MovieTicketBooking>;
  obs: Observable<any>;
  selectedTikets = [];
  disabled = true;
  // loader true false
  isLoading = true;

  //constructor
  constructor(
    public movieTicketsService: MovieTicketsList,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadListdata();
  }

  loadListdata() {
    // api call to get list of photo
    this.movieTicketsService.getProfileDetails().subscribe(
      (response: any) => {
        this.ticketDetails = new MatTableDataSource(response);
        this.isLoading = false;
        this.changeDetectorRef.detectChanges();
        this.ticketDetails.paginator = this.paginatorForCards;
        this.obs = this.ticketDetails.connect();
      },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
        this.ticketDetails = new MatTableDataSource([]);
      }
    );
  }

  onBooking(event: any, selectedTicket: MovieTicketBooking) {
    if (event.checked) {
      this.selectedTikets.push(selectedTicket);
      this.disabled = false;
    } else {
      this.selectedTikets = this.selectedTikets.filter(function (item) {
        return item._id != selectedTicket._id;
      });
      if (this.selectedTikets.length == 0) {
        this.disabled = true;
      }
    }
  }

  bookMovieTickets() {
    console.log(this.selectedTikets);
    this.movieTicketsService.bookMovieTickets(this.selectedTikets).subscribe(
      (response: any) => {
        if (response.status == 0) {
          this.loadListdata();
        }
      },
      (error: any) => {
        console.log(error);
        this.isLoading = false;
      }
    );
  }
}
