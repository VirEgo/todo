import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TodoServiceService } from "src/app/services/todo-service.service";
@Component({
    selector: 'color-label',
    templateUrl: './color-label.html',
    styleUrls: ['./color-label.scss'],
})

export class ColorLabelComponent {
    @Input() color!: string;
    @Output('initedColor') initedColor: EventEmitter<string> = new EventEmitter();
    isChoosen: boolean = false;
    constructor(private todoService: TodoServiceService) {
    }

    initColor(colorHEX: string): void {
        this.initedColor.emit(colorHEX);
        this.todoService.newTodo.labelColor = colorHEX;
        this.isChoosen = !this.isChoosen;
        console.log(this.todoService.newTodo);

    }
}