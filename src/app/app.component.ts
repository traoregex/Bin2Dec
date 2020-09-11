import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bin2dec';
  number: string;
  result: string;

  getInput(): void {
    if (!this.number) {
      this.result = '';
    } else if (this.number.length <= 8 && this.number.length >= 1) {
      this.result = parseInt(this.number, 2).toString();
    }
    console.log(this.number);
  }
}
