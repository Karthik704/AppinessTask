import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PizzaDetailsComponent } from "./pizza-details/pizza-details.component";
import { PizzaComponent } from "./pizza/pizza.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "pizza",
    pathMatch: "full"
  },
  { path: "pizza", component: PizzaComponent },
  {
    path: "pizza-details",
    component: PizzaDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
