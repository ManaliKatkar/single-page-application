import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { PhotoDetails } from "../shared/PhotoDetails";
import { APP_LEVEL_CONSTANTS } from "../shared/app-level-constant";

@Injectable({
  providedIn: "root",
})
export class PhotoListingService {
  appLevelConstants = APP_LEVEL_CONSTANTS;
  
  constructor(private http: HttpClient) {}

  // service to get json data
  getPhotoDetails(): Observable<PhotoDetails[]> {
    return this.http.get<PhotoDetails[]>(
      this.appLevelConstants.GET_LIST_OF_PHOT_DETAILS
    );
  }
}
