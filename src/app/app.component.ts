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
  alert: string;
  lastValue: string;

  getInput(event: any): void {
    const value = event.target.value;
    setTimeout(() => {
      if (
        value.charAt(value.length - 1) === '0' ||
        value.charAt(value.length - 1) === '1' ||
        value.charAt(value.length - 1) === ''
      ) {
        this.number = value;
        this.lastValue = value;
        this.result = this.number ? parseInt(this.number, 2).toString() : '0';
        this.alert = '';
      } else {
        this.number = this.lastValue;
        this.alert = 'Enter 0 or 1 please';
        setTimeout(() => {
          this.alert = '';
        }, 3000);
      }
    });
  }
}
