import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas!: ElementRef;
  private context!: CanvasRenderingContext2D;
  private socket: Socket; // Declare the socket variable with the Socket type

  constructor() {
    this.socket = io('http://localhost:3000'); // Initialize the socket
  }

  ngOnInit(): void {
    this.context = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d')!;

    
    this.socket.on('draw', (data: any) => {
      this.draw(data.x, data.y);
    });
  }

  draw(x: number, y: number): void {
    this.context.fillStyle = 'black';
    this.context.fillRect(x, y, 2, 2);
  }
}
