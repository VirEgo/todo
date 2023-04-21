import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/app.component';
import { TodoServiceService } from 'src/services/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todos$: Observable<Todo[]>;
  displayedColumns: string[] = ['id', 'title', 'description', 'action'];
  constructor(
    private todoService: TodoServiceService
  ) {
    this.todos$ = this.todoService.todos$;
  }
}
