import { Component, ComponentRef, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupService } from 'src/services/popup-service.service';
import { PopupComponent } from 'src/common/components/popup/app.popup';

@Component({
  selector: 'app-add-todo-panel',
  templateUrl: './add-todo-panel.component.html',
  styleUrls: ['./add-todo-panel.component.scss']
})
export class AddTodoPanelComponent {

  // @ViewChild(PopupHostDirective, { static: true }) popupHost!: PopupHostDirective;

  @ViewChild('newTodo')
  newTodo!: ElementRef<HTMLInputElement>;
  @ViewChild('alertContainer', { read: ViewContainerRef }) container: any;
  componentRef!: ComponentRef<PopupComponent>;

  constructor(public dialogService: PopupService, public dialog: MatDialog) { }



  createTodo(title?: string) {
    this.dialogService.createComponent(title)
    // this.createPopup(title)

    // if (this.newTodo.nativeElement.value.length != 0) {

    // } else alert("Todo can't be an empty string")

  }


  // createPopup(newTodoTitle: string | undefined) {

  //   const viewContainerRef = this.popupHost.viewContainerRef;
  //   viewContainerRef.clear();

  //   const componentRef = viewContainerRef.createComponent(PopupComponent);
  //   componentRef.setInput('title', newTodoTitle)
  //   componentRef.instance.output.subscribe(() => {
  //     viewContainerRef.clear();
  //   })
  // }

}
