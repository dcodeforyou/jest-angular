import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matchers',
  templateUrl: './matchers.component.html',
  styleUrls: ['./matchers.component.css']
})
export class MatchersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  compileErrorCode() {
    throw new Error('you are using old angular');
  }

}
