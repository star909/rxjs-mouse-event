import { Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { takeUntil, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-mouse-event',
  templateUrl: './mouse-event.component.html',
  styleUrls: ['./mouse-event.component.css']
})
export class MouseEventComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.mouseMove()
  }



  /** Method to make movable element */
  private mouseMove(): void {
    const mousePointer = document.getElementById("mousePointer");
    const mousedown$ = fromEvent<MouseEvent>(mousePointer, 'mousedown');
    const mousemove$ = fromEvent<MouseEvent>(document, 'mousemove');
    const mouseup$ = fromEvent<MouseEvent>(mousePointer, 'mouseup');

    const drag$ = mousedown$.pipe(
      mergeMap(
        (start) => {
          return mousemove$.pipe(map(move => {
            move.preventDefault();
            return {
              left: move.clientX - start.offsetX,
              top: move.clientY - start.offsetY
            }
          }),
            takeUntil(mouseup$));
        }));

    drag$.subscribe(pos => {
      mousePointer.style.top = `${pos.top}px`
      mousePointer.style.left = `${pos.left}px`
    });

  }

}
