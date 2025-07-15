import { CalculationItem } from "./CalculationItem";

export class CalculationResult {
  CubicMeter: number;
  Price: number;
  VAT: number;
  TotalPrice: number;
  constructor() {
    this.CubicMeter = 0;
    this.Price = 0;
    this.VAT = 0;
    this.TotalPrice = 0;
  }
  CalculateCubicMeter(items: CalculationItem[]) {
    this.CubicMeter = items.reduce(
      (acc, item) => acc + item.TotalCubicMeter,
      0
    );
  }
  CalculatePrice(items: CalculationItem[]) {
    this.Price = items.reduce((acc, item) => acc + item.TotalPrice, 0);
  }
  CalculateVAT() {
    this.VAT = this.Price * 0.2;
  }
  CalculateTotalPrice() {
    this.TotalPrice = this.Price + this.VAT;
  }
  Calculate(items: CalculationItem[]) {
    this.CalculateCubicMeter(items);
    this.CalculatePrice(items);
    this.CalculateVAT();
    this.CalculateTotalPrice();
  }
}
