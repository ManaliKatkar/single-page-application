//import third part 
import { ChangeDetectorRef, Component, ViewChild } from "@angular/core";
import { MatPaginator, MatTableDataSource } from "@angular/material";
import { Observable } from "rxjs";

// intenal imports
import { PhotoListingService } from "./services/photo-listing.service";
import { PhotoDetails, APP_LEVEL_CONSTANTS } from "./shared";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild("MatPaginatorCards", { static: false })
  paginatorForCards: MatPaginator;
  @ViewChild("MatPaginatorTable", { static: true })
  paginatorForTable: MatPaginator;
  appLevelConstants = APP_LEVEL_CONSTANTS;
  displayedColumns = this.appLevelConstants.COLUMN_TITLE;

  cardDetails: MatTableDataSource<PhotoDetails>;
  comparedTableData: MatTableDataSource<PhotoDetails>;
  obs: Observable<any>;

  // loader true false
  isLoading = true;

  //constructor
  constructor(
    public photoListingService: PhotoListingService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.comparedTableData = new MatTableDataSource();
  }

  ngOnInit(): void {
    // api call to get list of photo
    this.photoListingService.getPhotoDetails().subscribe(
      (response: any) => {
        this.cardDetails = new MatTableDataSource(response);
        this.isLoading = false;
        this.changeDetectorRef.detectChanges();
        this.cardDetails.paginator = this.paginatorForCards;
        this.obs = this.cardDetails.connect();
      },
      (error: any) => {
        console.log(error);
        this.isLoading = true;
        this.cardDetails = new MatTableDataSource([]);
      }
    );

    // table data
    this.comparedTableData.data = [];
    this.comparedTableData.paginator = this.paginatorForTable;
  }

  onCompare(row) {
    // map id aand then change key and push row to table data
    this.cardDetails.data.map((val) => {
      if (row.id == val.id) {
        val.is_removed = true;
      }
    });
    this.comparedTableData.data.push(row);
    this.comparedTableData.data = [...this.comparedTableData.data];
  }

  onRemove(row) {
    // map id aand then change key and remove row from table data
    this.cardDetails.data.map((val) => {
      if (row.id == val.id) {
        val.is_removed = false;
      }
    });
    this.comparedTableData.data = this.comparedTableData.data.filter(
      (item) => item.id !== row.id
    );
  }
}
