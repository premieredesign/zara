import { Component, OnInit } from "@angular/core";
import { InventoryService } from "./inventory.service";

@Component({
  selector: "app-departments",
  templateUrl: "./departments.component.html",
  styleUrls: ["./departments.component.css"],
})
export class DepartmentsComponent implements OnInit {
  stock;
  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {}

  getInStock() {
    this.inventoryService.getItems().subscribe((res) => {
      this.stock = res;
    });
  }
}
