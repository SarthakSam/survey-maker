import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PagesTabComponent } from './survey/pages-tab/pages-tab.component';
import { FormInputsComponent } from './survey/form-inputs/form-inputs.component';
import { SurveyComponent } from './survey/survey.component';
import { FormComponent } from './survey/form/form.component';
import { FormQuestionComponent } from './survey/form/form-question/form-question.component';
import { FormEditComponent } from './survey/form-edit/form-edit.component';
import { EditableInputComponent } from './editable-input/editable-input.component';
import { FocusWhenDirective } from './directives/focusWhen.directive';

@NgModule({
  declarations: [
    AppComponent,
    PagesTabComponent,
    FormInputsComponent,
    SurveyComponent,
    FormComponent,
    FormQuestionComponent,
    FormEditComponent,
    EditableInputComponent,
    FocusWhenDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
