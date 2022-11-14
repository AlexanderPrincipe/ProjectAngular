import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spotifyClon';

  // Compare two arrays
  compareArrays(a: number[], b: number[]) {
    return a.length === b.length && a.every((value, index) => value === b[index]);
  }
}


