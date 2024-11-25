import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: 'counter.component.html'
})

export class CounterComponent implements OnInit, OnChanges {
    private count: number;
    private flag: boolean;
    private clickCount: number;

    @Input() interval: number;
    @Output() onmax: EventEmitter<boolean>;

    constructor() {
        this.interval = 1;
        this.onmax = new EventEmitter<boolean>();
    }

    ngOnChanges() {
        console.log("onChanges Counter Component");
    }

    ngOnInit() {
        this.reset();
    }

    private manageClickCount() {
        this.clickCount += 1;
        if (this.clickCount > 9) {
            this.flag = true;
            this.onmax.emit(this.flag);
        }
    }

    private inc() {
        this.manageClickCount();
        this.count += this.interval;
    }

    private dec() {
        this.manageClickCount();
        this.count -= this.interval;
    }

    reset() {
        this.count = 0;
        this.flag = false;
        this.clickCount = 0;
        this.onmax.emit(this.flag);
    }
}