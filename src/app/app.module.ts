import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PizzaComponent } from "../app/pizza/pizza.component";
import { PizzaDetailsComponent } from "../app/pizza-details/pizza-details.component";
import { CommonService } from "./common.service";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, PizzaComponent, PizzaDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
