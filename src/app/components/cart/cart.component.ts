import { Component, OnInit } from "@angular/core";
import { ChangeDetectorRef, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

// internal imports
import { ItemListingService } from "src/app/services/item-listing.service";
import { ItemsDetails, APP_LEVEL_CONSTANTS } from "src/app/shared";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  @ViewChild("MatPaginatorCards", { static: false })
  paginatorForCards: MatPaginator;

  appLevelConstants = APP_LEVEL_CONSTANTS;

  obs: Observable<any>;
  cardDetails: MatTableDataSource<ItemsDetails>;
  totalAmount: any = 0;
  isLoading = true;

  //constructor
  constructor(
    public itemListingService: ItemListingService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    // api call to get list of photo
    this.getListData();
  }

  getListData() {
    const data = this.itemListingService.getCartDetails();
    const check = data.filter((item) => item.is_added_cart);
    this.cardDetails = new MatTableDataSource(check);
    this.changeDetectorRef.detectChanges();
    this.cardDetails.paginator = this.paginatorForCards;
    this.obs = this.cardDetails.connect();
    this.totalAmount = this.returnTotalAmount(check);
  }

  remove(row) {
    // remove from carts
    this.cardDetails.data = this.cardDetails.data.filter(
      (item) => item.id !== row.id
    );

    // get all items
    const getAllItemList = this.itemListingService.getItemDetails();
    getAllItemList.map((val) => {
      if (row.id == val.id) {
        val.is_added_cart = !val.is_added_cart;
      }
    });
    // set updated items
    this.itemListingService.setCartDetails(getAllItemList);
    this.totalAmount = this.returnTotalAmount(this.cardDetails.data);
  }

  // clear all carts items on single click
  clearCart() {
    this.cardDetails.data = [];
    this.itemListingService.setCartDetails(this.cardDetails.data);
    this.totalAmount = 0;
  }

  // move to menu screen
  moveToMenu() {
    this.router.navigateByUrl("/" + this.appLevelConstants.LIST_COMPONENT);
  }

  // return total carts items amount
  returnTotalAmount(data) {
    return data.reduce(
      (accumulator, current) => accumulator + current.price,
      0
    );
  }

  // returm discount amt for selected items
  returnDiscount() {
    if (this.totalAmount >= 101 || this.totalAmount <= 500) {
      return this.totalAmount * 0.1;
    } else if (this.totalAmount > 500) {
      return this.totalAmount * 0.2;
    } else {
      return 0;
    }
  }
}
