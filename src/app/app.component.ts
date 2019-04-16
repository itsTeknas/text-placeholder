import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'text-placeholder-directive';

  onLoadError($event) {
    console.log(`Error loading image: `, $event);
  }
}
