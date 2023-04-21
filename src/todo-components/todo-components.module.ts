import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoPanelComponent } from './add-todo-panel/add-todo-panel.component';
import { MaterialUIModule } from 'src/material-module.module';

@NgModule({
  declarations: [
    TodoListComponent,
    AddTodoPanelComponent,
  ],
  imports: [
    CommonModule,
    TodoItemComponent,
    MaterialUIModule,
  ],
  exports: [TodoItemComponent, TodoListComponent, AddTodoPanelComponent]
})
export class TodoComponentsModule { }
