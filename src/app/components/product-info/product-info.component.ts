import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { aiArr } from "src/app/data/studentsCards";



@Component({
    selector : "app-product-info",
    templateUrl : "./product-info.component.html",
    styleUrls : ["./product-info.component.scss"],
    // standalone: true,
    // imports: [CommonModule],
})
export class ProductInfoComponent{
    artificialIntelligence = aiArr
}