import { Component, ElementRef, OnInit, ViewChild, forwardRef, viewChild } from "@angular/core";
import { CounterService } from "../services/counter.service";
import { filter, take, tap } from "rxjs";
@Component({
  template: ''
})
export abstract class CommonComponent implements OnInit {
  ngOnInit(): void {
    this.counter$.pipe(
      filter(count => count >= this.LIMIT),
      tap(() => this.container()?.nativeElement.classList.add('red-bgr')),
      take(1)
    ).subscribe();
  }
  readonly LIMIT = 10

  counterService = new CounterService();
  counter$ = this.counterService.counter$;
  container = viewChild<ElementRef>('container');

  increase = () => this.counterService.increase();
}

export function provideTheParent
  (component: any) {
  return { provide: CommonComponent, useExisting: forwardRef(() => component) };
}