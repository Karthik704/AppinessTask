import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  pizzaSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    this.pizzaSubject = new BehaviorSubject(1);
  }

  getPizzaOrders() {
    return this.http.get("./assets/pizza.json");
  }

  setSelectedPizzaDetails(pizzaDetails): void {
    this.pizzaSubject.next(pizzaDetails);
  }

  getSelectedPizzaDetails(): BehaviorSubject<any> {
    return this.pizzaSubject;
  }
}
