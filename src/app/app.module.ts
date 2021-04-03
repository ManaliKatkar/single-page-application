// import from third party or angular import
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MatCardModule, MatButtonModule } from "@angular/material";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material';

import { HttpClientModule } from "@angular/common/http";
import {
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatTableModule,
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

// import from internal
import { MovieTicketsList } from "./services/movie-ticket.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MovieTicketList } from './movie-ticket-list/movie-ticket-list.component';


@NgModule({
  declarations: [AppComponent, MovieTicketList],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [MovieTicketsList],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
