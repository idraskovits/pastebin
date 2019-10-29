import { Component } from '@angular/core';
import $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  input: string;

  post() {
    // sending text to node
    $.post('http://localhost:3000/save', {text: this.name}, (data) => {
      document.location.href = 'http://localhost:4200/view/' + data.filename;
      console.log(data.filename);
    }, 'json');
  }
}
