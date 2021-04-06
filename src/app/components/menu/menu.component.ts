import { Component, OnInit } from "@angular/core";
import { ChangeDetectorRef, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

// intenal imports
import { ItemListingService } from "src/app/services/item-listing.service";
import { ItemsDetails, APP_LEVEL_CONSTANTS } from "src/app/shared";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  @ViewChild("MatPaginatorCards", { static: false })
  paginatorForCards: MatPaginator;
  appLevelConstants = APP_LEVEL_CONSTANTS;

  cardDetails: MatTableDataSource<ItemsDetails>;
  comparedTableData: ItemsDetails[];
  totalCount: any = 0;
  totalAmount: any = 0;
  obs: Observable<any>;

  // loader true false
  isLoading = true;

  //constructor
  constructor(
    public itemListingService: ItemListingService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    // api call to get list of photo
    const getCartData = this.itemListingService.getCartDetails();
    if (getCartData.length === 0) {
      // if data not aavailable then call updated list of item from given api
      this.itemListingService.getItemsList().subscribe(
        (response: any) => {
          this.isLoading = false;
          this.cardDetails = new MatTableDataSource(response);
          this.changeDetectorRef.detectChanges();
          this.cardDetails.paginator = this.paginatorForCards;
          this.obs = this.cardDetails.connect();
        },
        (error: any) => {
          this.isLoading = true;
          this.cardDetails = new MatTableDataSource([]);
        }
      );
    } else {
      this.cardDetails = new MatTableDataSource(getCartData);
      this.isLoading = false;
      this.changeDetectorRef.detectChanges();
      this.cardDetails.paginator = this.paginatorForCards;
      this.obs = this.cardDetails.connect();
      this.totalAmount = this.returnTotalAmount(this.cardDetails.data);
    }
    if (this.cardDetails) {
    }
  }

  addRemoveItem(row) {
    // add or remove item to/from cart
    this.cardDetails.data.map((val) => {
      if (row.id == val.id) {
        val.is_added_cart = !val.is_added_cart;
      }
    });

    // set cart data 
    this.itemListingService.setCartDetails(this.cardDetails.data);
    // return total amount of cart items only
    this.totalAmount = this.returnTotalAmount(this.cardDetails.data);
  }

  //return cart item total amount
  returnTotalAmount(data) {
    const filterData = data.filter((item) => item.is_added_cart);
    this.totalCount = filterData.length;
    return filterData.reduce(
      (accumulator, current) => accumulator + current.price,
      0
    );
  }

  // move to cart screen
  moveToCart() {
    this.router.navigateByUrl("/" + this.appLevelConstants.CART_COMPONENT);
    this.itemListingService.setItemDetails(this.cardDetails.data);
  }
}
