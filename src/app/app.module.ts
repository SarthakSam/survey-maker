import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PagesTabComponent } from './survey/pages-tab/pages-tab.component';
import { FormInputsComponent } from './survey/form-inputs/form-inputs.component';
import { SurveyComponent } from './survey/survey.component';
import { FormPageComponent } from './survey/form-page/form-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesTabComponent,
    FormInputsComponent,
    SurveyComponent,
    FormPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
