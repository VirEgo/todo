import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'label-selection',
    templateUrl: './label-selection.html',
    styleUrls: ['./label-selection.scss']
})

export class LabelSelectionComponent implements OnInit {
    constructor() {
        for (let i = 0; i < 50; i++) {
            this.colors.push(this.generateColor());
        }
    }

    colors: Array<string> = [];
    letters = '0123456789ABCDEF';
    color = '#';

    generateColor(): string {
        this.color = '#';
        for (var i = 0; i < 6; i++) {
            this.color += this.letters[Math.floor(Math.random() * 16)];
        }
        return this.color
    }

    ngOnInit(): void {

    }

    setColor(event: string): void {
        console.log(event);

    }
}