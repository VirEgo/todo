import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './main-layout/header/header.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { MaterialUIModule } from 'src/material-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MaterialUIModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CommonComponentsModule { }
