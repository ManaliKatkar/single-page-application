import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";

import { MovieTicketBooking } from "../shared/MovieTicketBooking";
import { APP_LEVEL_CONSTANTS } from "../shared/app-level-constant";

@Injectable({
  providedIn: "root",
})
export class MovieTicketsList {
  appLevelConstants = APP_LEVEL_CONSTANTS;

  getApplicationHeaders() {
    return {
      headers: new HttpHeaders({
        "Content-type": "application/json",
      }),
    };
  }
  constructor(private http: HttpClient) {}

  getProfileDetails(): Observable<any> {
    return this.http.get(
      this.appLevelConstants.GET_LIST_OF_PROFILE_DETAILS,
      this.getApplicationHeaders()
    );
  }

  deleteProfileDetails(data): Observable<any> {
    return this.http.delete(this.appLevelConstants.DELETE_PROFILE, data);
  }

  bookMovieTickets(data): Observable<any> {
    return this.http.put(
      this.appLevelConstants.CREATE_PROFILE,
      JSON.stringify(data),
      this.getApplicationHeaders()
    );
  }
}
