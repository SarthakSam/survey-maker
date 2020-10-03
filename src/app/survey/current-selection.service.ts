import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectionState } from './models/general.model';

@Injectable({
  providedIn: 'root'
})
export class CurrentSelectionService {

  selectedObj: SelectionState = {
    pageNo: 1,
    questionNo: -1,
    currSelection: "pageNo"
  }

  selectedObj$: BehaviorSubject<SelectionState> = new BehaviorSubject<SelectionState>(this.selectedObj);

  constructor() { }

  getProfileObs(): Observable<SelectionState> {
    return this.selectedObj$.asObservable();
}

setProfileObs(newSelection: SelectionState) {
    this.selectedObj$.next(newSelection);
}
}
