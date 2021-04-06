import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { ItemsDetails, APP_LEVEL_CONSTANTS } from "src/app/shared";

@Injectable({
  providedIn: "root",
})
export class ItemListingService {
  appLevelConstants = APP_LEVEL_CONSTANTS;

  cartDetails: ItemsDetails[] = [];
  itemDetails: ItemsDetails[] = [];

  constructor(private http: HttpClient) {}

  // service to get json data
  getItemsList(): Observable<ItemsDetails[]> {
    return this.http.get<ItemsDetails[]>(
      this.appLevelConstants.GET_LIST_OF_ITEMS
    );
  }

  // set cart data
  setCartDetails(cardDetails) {
    this.cartDetails = cardDetails;
  }

  // get all items data
  getCartDetails() {
    return this.cartDetails;
  }

  // set all items data
  setItemDetails(itemDetails) {
    this.itemDetails = itemDetails;
  }

  // get all items data
  getItemDetails() {
    return this.itemDetails;
  }
}
