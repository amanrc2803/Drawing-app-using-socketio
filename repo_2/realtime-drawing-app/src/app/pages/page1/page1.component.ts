import { Component, ElementRef, ViewChild } from '@angular/core';

import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  @ViewChild('canvas', { static: true })
  canvas!: ElementRef;
  private context!: CanvasRenderingContext2D;
  private drawing = false;
  private socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  ngAfterViewInit(): void {
    //this.context = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d');
    this.context = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d')!;
  }

  startDrawing(event: MouseEvent): void {
    this.drawing = true;
    this.context.beginPath();
    this.context.moveTo(event.clientX - this.canvas.nativeElement.offsetLeft, 
                        event.clientY - this.canvas.nativeElement.offsetTop);
  }

  draw(event: MouseEvent): void {
    if (!this.drawing) return;

    this.context.lineTo(event.clientX - this.canvas.nativeElement.offsetLeft,    
                      event.clientY - this.canvas.nativeElement.offsetTop);
    this.context.stroke();
    const data = {
      x: event.clientX - this.canvas.nativeElement.offsetLeft,
      y: event.clientY - this.canvas.nativeElement.offsetTop
    };
    this.socket.emit('draw', data);
  }

  stopDrawing(): void {
    this.drawing = false;
    this.context.closePath();
  }
}
