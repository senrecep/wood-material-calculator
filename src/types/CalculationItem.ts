import { nanoid } from "nanoid";
export class CalculationItem {
  Id: string;
  Thickness: number;
  Width: number;
  Height: number;
  SingleCubicMeter: number;
  Count: number;
  TotalCubicMeter: number;
  UnitPrice: number;
  TotalPrice: number;
  constructor() {
    this.Id = nanoid();
    this.Thickness = 0;
    this.Width = 0;
    this.Height = 0;
    this.SingleCubicMeter = 0;
    this.Count = 0;
    this.TotalCubicMeter = 0;
    this.UnitPrice = 0;
    this.TotalPrice = 0;
  }
  CalculateSingleCubicMeter() {
    this.SingleCubicMeter = (this.Thickness * this.Width * this.Height) / 1000;
  }
  CalculateTotalCubicMeter() {
    this.TotalCubicMeter = this.SingleCubicMeter * this.Count;
  }
  CalculateTotalPrice() {
    this.TotalPrice = (this.UnitPrice * this.TotalCubicMeter) / 1000;
  }
  Calculate() {
    this.CalculateSingleCubicMeter();
    this.CalculateTotalCubicMeter();
    this.CalculateTotalPrice();
  }
}
