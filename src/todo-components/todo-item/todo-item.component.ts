import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../../app/app.component';
import { TodoServiceService } from '../../app/services/todo-service.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon"

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  standalone: true,
  imports: [BrowserModule, FormsModule, MatButtonModule, MatIconModule],
})
export class TodoItemComponent {
  @Input()
  todoData!: Todo;
  @ViewChild('newTodoValue')
  newTodoValue!: ElementRef<HTMLInputElement>;
  currentTodo!: Todo;
  currentTodoId!: number;
  isNeedToEdit: boolean = false;

  constructor(
    private todoService: TodoServiceService
  ) { }

  isDoneToggle(id: number): void {
    this.todoService.toggleTodo(id)
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }
  markImportant(id: number): void {
    this.todoService.markImportant(id);
  }

  saveEditedTodo(id: number): void {
    this.todoService.editTodo(id, this.newTodoValue.nativeElement.value);
    this.isNeedToEdit = false;
  }

  editTodo(): void {
    this.isNeedToEdit = true;
  }
}
