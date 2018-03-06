import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
    private viewSource = new BehaviorSubject<string>("empty");
    currentView = this.viewSource.asObservable();

    constructor() { }

    changeView(view:string) {
        this.viewSource.next(view);
    }

    clearView() {
        this.viewSource.next("empty");
    }

}