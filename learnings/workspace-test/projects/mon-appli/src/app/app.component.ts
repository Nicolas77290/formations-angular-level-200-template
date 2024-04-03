import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaLibService } from 'masuperlib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mon-appli';

  constructor(private monService: MaLibService) {}
}
