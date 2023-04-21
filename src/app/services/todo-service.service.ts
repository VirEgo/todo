import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../app.component';

@Injectable({
  providedIn: 'root'
})

export class TodoServiceService {
  ls = localStorage;

  private todoSubject$: BehaviorSubject<Todo[]> = new BehaviorSubject(this.getTodos);
  todos$ = this.todoSubject$.asObservable();

  constructor() {
    this.todoSubject$.subscribe((todos) => this.updateTodosInLocalStorage(todos))
  }

  get getTodos(): Array<Todo> {
    const result: Array<Todo> = this.ls['todos']?.length ?
      JSON.parse(this.ls.getItem('todos')!) :
      [];
    return result
  }

  newTodo: Todo = {
    title: '',
    isDone: false,
    important: false,
    id: 0
  };


  // Create 
  addTodos(todo: Todo): void {
    const res: Array<Todo> = this.todoSubject$.getValue().concat(todo);
    this.todoSubject$.next(res);

  }

  //Delete
  deleteTodo(todoId: number) {
    const res = this.todoSubject$.getValue().filter(todo => todo.id !== todoId);
    this.todoSubject$.next(res);

  }

  //Toggle 
  toggleTodo(id: number): void {
    const res = this.todoSubject$.getValue().map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo
    });
    this.todoSubject$.next(res);

  }

  markImportant(id: number): void {
    console.log('Mark as important ', id);

    const res = this.todoSubject$.getValue().map((todo) => {
      if (todo.id === id) {
        todo.important = !todo.important;
      }
      return todo
    });
    this.todoSubject$.next(res);

  }

  //Update
  editTodo(todoId: number, newValue: string) {
    const todos = this.todoSubject$.getValue();
    const newTodo: number = todos.findIndex((todo) => todo.id === todoId);
    todos[newTodo].title = newValue;
    this.todoSubject$.next(todos);
  }

  updateTodosInLocalStorage(todoList: Array<Todo>): void {
    this.ls.setItem('todos', JSON.stringify(todoList))
  }
}
