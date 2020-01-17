import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HeaderTitleService {

    private title = new BehaviorSubject<string>(null);

    constructor(

    ) { }

    setHeaderTitle(title) {
        this.title.next(title);
    }

    getHeaderTitle(): Observable<string> {
        return this.title.asObservable();
    }
}
