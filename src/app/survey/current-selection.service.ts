import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectionState } from './models/general.model';

@Injectable({
  providedIn: 'root'
})
export class CurrentSelectionService {

  selectedObj: SelectionState = {
    pageNo: 0,
    questionIndex: -1,
    currSelection: "page"
  }

  selectedObj$: BehaviorSubject<SelectionState> = new BehaviorSubject<SelectionState>(this.selectedObj);

  constructor() { }

  getSelectedObj(): Observable<SelectionState> {
    return this.selectedObj$.asObservable();
}

  setSelectedObj(newSelection: SelectionState) {
    if(newSelection.currSelection == "page")
      newSelection.questionIndex = -1;
    this.selectedObj$.next(newSelection);
  }

  changePage(pageNo: number) {
    this.selectedObj.pageNo = pageNo;
    this.setSelectedObj(this.selectedObj);
  }
}
