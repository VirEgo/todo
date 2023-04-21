import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[popupHost]'
})
export class PopupHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
