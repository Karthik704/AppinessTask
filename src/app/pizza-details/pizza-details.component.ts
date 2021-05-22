import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-pizza-details",
  templateUrl: "./pizza-details.component.html",
  styleUrls: ["./pizza-details.component.css"]
})
export class PizzaDetailsComponent implements OnInit {
  selectedPizza;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.getSelectedPizzaDetails().subscribe((details) => {
      this.selectedPizza = details;
    });
  }
}
