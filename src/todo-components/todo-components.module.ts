import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AddTodoPanelComponent } from './add-todo-panel/add-todo-panel.component';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    TodoListComponent,
    AddTodoPanelComponent
  ],
  imports: [
    CommonModule,
    TodoItemComponent,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [TodoItemComponent, TodoListComponent, AddTodoPanelComponent]
})
export class TodoComponentsModule { }
