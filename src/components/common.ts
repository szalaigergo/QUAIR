import { Component, Injectable } from "@angular/core";
import { CounterService } from "../services/counter.service";
import { CommonModule } from "@angular/common";

@Component({
    selector: "qair-common",
    template: "",
    standalone: true,
    imports: [CommonModule]
})
export class CommonComponent {
    readonly LIMIT = 10

    counterService = new CounterService();
    counter$ = this.counterService.counter$;

    increase = () => this.counterService.increase();
}