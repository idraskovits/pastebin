import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('filename');
    console.log(name);

    $.get('http://localhost:3000/read/' + name, (data) => {
        $('#text-space').append(data);
    });
  }

  copylink() {
        navigator.clipboard.writeText(location.href);
  }
  copycontent() {
        navigator.clipboard.writeText(document.getElementById('text-space').textContent);
  }
}


