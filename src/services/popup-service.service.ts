import { Injectable, ViewChild, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PopupHostDirective } from '../app/popup-host.directive';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PopupComponent } from 'src/common/components/popup/app.popup';

@Injectable({
    providedIn: 'root'
})

export class PopupService {
    public isPopupOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);
    @ViewChild(PopupHostDirective, { static: true }) popupHost!: PopupHostDirective;

    constructor(public dialog: MatDialog) { }

    async createComponent(title?: string) {
        // this.isPopupOpen.next(true);
        // const { PopupComponent } = await import("../../common/components/popup/app.popup")
        // this.viewContainerRef.clear();

        // const containerRef = this.popupHost.viewContainerRef.createComponent(PopupComponent);

        // containerRef.instance.output.subscribe(() => {
        //     this.viewContainerRef.clear();
        //     this.isPopupOpen.next(false);

        // });

        this.dialog.open(PopupComponent, {
            data: { title: title },
            width: '350px',
            height: '350px'
        },);
    }

    ngOnDestroy() {
        this.isPopupOpen.next(false);
        // this.viewContainerRef.clear();
        // dialogRef.afterClosed().subscribe(result => {
        //     console.log(`Dialog result: ${result}`);
        // });
    }
}