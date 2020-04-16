import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Name:string;
  ngOnInit()
  {
    this.Name="jc";
  }
  getColor(number) { 
    switch (number) {
      case '1':
        return 'green';
      case '2':
        return 'blue';
      case '3':
        return 'red';
    }
  }
}
