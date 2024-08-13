import { Injectable, OnDestroy } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";

@Injectable()
export class Destroy extends Observable<void> implements OnDestroy {

    private readonly destroyer$ = new ReplaySubject<void>(1);

    constructor(){
        super(subscriber => this.destroyer$.subscribe(subscriber))
    }

    ngOnDestroy(): void {
        this.destroyer$.next();
        this.destroyer$.complete();
    }
}