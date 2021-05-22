import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "../common.service";

@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.css"]
})
export class PizzaComponent implements OnInit {
  pizzaOrders;
  status = ["Received", "Preparing", "Finished"];

  constructor(private commonService: CommonService, private router: Router) {}

  ngOnInit(): void {
    this.commonService.getPizzaOrders().subscribe((orders) => {
      this.pizzaOrders = orders;
    });
  }

  setSelectedPizza(selectedPizza) {
    this.commonService.setSelectedPizzaDetails(selectedPizza);
    this.router.navigate(["/pizza-details"]);
  }

  updatePizzaStatus(orderStatus, i) {
    const index = this.status.indexOf(orderStatus);
    this.pizzaOrders[i].status =
      index < 2 ? this.status[index + 1] : this.status[index];
  }

  goToDetails() {
    this.router.navigate(["/pizza-details"]);
  }
}
