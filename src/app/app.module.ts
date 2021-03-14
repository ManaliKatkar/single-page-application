// import from third party or angular import
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MatCardModule, MatButtonModule } from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import {
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatTableModule,
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// import from internal
import { PhotoListingService } from "./services/photo-listing.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
  ],
  providers: [PhotoListingService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
