import { Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { takeUntil, map, mergeMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-mouse-event',
  templateUrl: './mouse-event.component.html',
  styleUrls: ['./mouse-event.component.css']
})
export class MouseEventComponent implements OnInit {
  constructor() { }
  stylObj: object = {};
  ngOnInit() {
    this.mouseMove()
  }



  /** Method to make movable element */
  private mouseMove(): void {
    const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove')
      .pipe(
        map((move: MouseEvent) => {
          return {
            left: move.clientX,
            top: move.clientY
          }
        }));

    mousemove$.subscribe(pos => {
      this.stylObj = { 'top': `${pos.top}px`, 'left': `${pos.left}px` };
    });

  }

}
