import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from '../common/components/popup/app.popup';
import { LabelSelectionComponent } from 'src/common/components/label-selection/label-selection';
import { ColorLabelComponent } from 'src/common/components/label-selection/color-label/color-label';
import { PopupHostDirective } from './popup-host.directive';
import { CommonComponentsModule } from 'src/common/common.module';
import { TodoComponentsModule } from 'src/todo-components/todo-components.module';
import { MaterialUIModule } from 'src/material-module.module';
@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    LabelSelectionComponent,
    ColorLabelComponent,
    PopupHostDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    TodoComponentsModule,
    CommonComponentsModule,
    MaterialUIModule
  ],
  exports: [PopupComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
