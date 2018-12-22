import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <style>
    h1 {
      color: blue;
    }
    </style>
    <h1>
   <app-new-comp></app-new-comp>

    </h1>
    `
})
export class AppComponent {
  title = 'Assignment54';
}
