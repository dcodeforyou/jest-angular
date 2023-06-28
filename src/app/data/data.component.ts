import { Component, OnInit } from '@angular/core';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  serviceData: any;
  errorMessage: any;
  greeting: any;

  constructor(private mockService: MockService) { }

  ngOnInit(): void {
    this.getServiceData();
  }

  getServiceData() {
    this.mockService.getDataVal().subscribe({
      next: data => {
        this.serviceData = data;
        this.setGreeting();
      },
      error: error => {
        this.errorMessage = error.statusText;
      },
      complete: () => {
        console.log('Finished');
      }
    })
  }

  setGreeting() {
    if(this.serviceData.time < 10) {
      this.greeting = "Good Morning";
    } else if(this.serviceData.time < 20) {
      this.greeting = "Good Day";
    } else {
      this.greeting = "Good Evening";
    }
  }

}
