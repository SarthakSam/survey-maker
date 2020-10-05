import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectionState } from './models/general.model';

@Injectable({
  providedIn: 'root'
})
export class CurrentSelectionService {

  selectedObj: SelectionState = {
    pageNo: 0,
    questionNo: -1,
    currSelection: "pageNo"
  }

  selectedObj$: BehaviorSubject<SelectionState> = new BehaviorSubject<SelectionState>(this.selectedObj);

  constructor() { }

  getSelectedObj(): Observable<SelectionState> {
    return this.selectedObj$.asObservable();
}

  setSelectedObj(newSelection: SelectionState) {
    this.selectedObj$.next(newSelection);
  }
}
