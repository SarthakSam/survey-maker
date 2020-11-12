import { Component, OnInit } from '@angular/core';
import { CurrentSelectionService } from '../current-selection.service';
import { FormDataService } from '../form-data.service';
import { DropDownOption } from '../models/dropDownOptions.model';
import { Form } from '../models/form.model';
import { SelectionState } from '../models/general.model';

@Component({
  selector: 'app-form-properties-edit',
  templateUrl: './form-properties-edit.component.html',
  styleUrls: ['./form-properties-edit.component.css']
})
export class FormPropertiesEditComponent implements OnInit {

  formData: Form;
  currentPage: number;
  currentQuestion: number;
  formElementsOptions: DropDownOption[];

  constructor(private formDataService: FormDataService, private currentSelectionService: CurrentSelectionService) { }

  ngOnInit() {
      this.formDataService.getFormData().subscribe( (form: Form) => {
          // console.log(form);
          // this.formElementsOptions = getFormOptions();
      });
      this.currentSelectionService.getSelectedObj().subscribe( (obj: SelectionState) =>{
        // console.log(obj);
      })
  }

}
