import { BehaviorSubject, Observable } from 'rxjs';

export class CounterService {
  private counter$$ = new BehaviorSubject<number>(0);

  counter$: Observable<number> = this.counter$$.asObservable();

  increase() {
    this.counter$$.next(this.counter$$.value + 1);
  }

}
