import { Injectable, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PopupService {

    public isPopupOpen: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor(
        private containerRef: ViewContainerRef) {
    }


    async createComponent() {
        this.isPopupOpen.next(true);
        const { PopupComponent } = await import("../../common/components/popup/app.popup")
        this.containerRef.clear();

        const containerRef = this.containerRef.createComponent(PopupComponent);

        containerRef.instance.output.subscribe(() => {
            this.containerRef.clear();
            this.isPopupOpen.next(false);

        });

    }



    ngOnDestroy() {
        this.containerRef.clear();
        this.isPopupOpen.next(false);
    }
}