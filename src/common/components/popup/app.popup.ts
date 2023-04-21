import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewContainerRef } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Todo } from 'src/app/app.component';
import { ViewChild } from '@angular/core';
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { DateTime } from "luxon";


enum CreateTodoSteps {
  Title = 0,
  Label = 1
}


@Component({
  selector: 'app.popup',
  templateUrl: './app.popup.html',
  styleUrls: ['./app.popup.scss'],

  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ]),
      transition(':leave', [animate(500, style({ opacity: 0 }))])
    ])
  ],
})


export class PopupComponent implements OnInit {
  currentStep: CreateTodoSteps = CreateTodoSteps.Title;
  todoTitle: string = '';
  todoDescription: string = '';

  CreateTodoSteps = CreateTodoSteps;

  newTodo: Todo = {
    title: '',
    description: 'string',
    isDone: false,
    important: false,
    id: 0
  }


  @ViewChild('newTodoTitle', { read: ViewContainerRef })
  newTodoTitle!: ElementRef<HTMLInputElement>;
  @ViewChild('newTodoDescription')
  newTodoDescription!: ElementRef<HTMLTextAreaElement>;


  @Input() title = 'Create task';
  @Output() output = new EventEmitter();
  constructor(private todoService: TodoServiceService,) { }

  ngOnInit(): void {

  }

  createTodo(): void {
    this.todoService.addTodos(this.todoService.newTodo);
    this.output.emit()
  }

  nextStep() {
    this.currentStep = CreateTodoSteps.Label;
    this.todoService.newTodo = {
      title: this.newTodoTitle.nativeElement?.value,
      description: this.newTodoDescription.nativeElement.value,
      important: false,
      isDone: false,
      id: +DateTime.now(),
      labelColor: "#ffffff"
    }
  }

  prevStep(): void {
    this.currentStep = CreateTodoSteps.Title;
    console.log(this.newTodoTitle);
  }
}