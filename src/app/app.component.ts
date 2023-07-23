import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'XM_Kapris_testV4';

  constructor(private router: Router) {}

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}
