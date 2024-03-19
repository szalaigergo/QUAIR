import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter$$ = new BehaviorSubject<number>(0);

  counter$: Observable<number> = this.counter$$.asObservable();

  increase() {
    this.counter$$.next(this.counter$$.value + 1);
  }

}
