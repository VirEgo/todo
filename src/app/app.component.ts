
import { ComponentRef, ViewContainerRef } from '@angular/core';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { PopupComponent } from 'src/common/components/popup/app.popup';
import { TodoServiceService } from './services/todo-service.service';
import { PopupHostDirective } from './popup-host.directive';

import { DateTime } from "luxon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';


  testTime = DateTime.now().toFormat('MM-dd-yyyy HH:mm')

  // @ViewChild(PopupHostDirective, { static: true }) popupHost!: PopupHostDirective;

  constructor() { }


}



export interface Todo {
  title: string,
  description?: string,
  isDone: boolean,
  important: boolean,
  id: number,
  labelColor?: string
}
