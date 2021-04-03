import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MovieTicketList } from "./movie-ticket-list/movie-ticket-list.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "list",
  },
  {
    path: "list",
    component: MovieTicketList,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
