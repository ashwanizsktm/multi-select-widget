import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  initialData: any = ["0-24", "25-99", "50-99", "100-249", "250-499", "500-999", "1000-4999", "5000-9999",
  "10000-49999",  "50000-100000"];
 
  finalData = [];             

  constructor() { }

  ngOnInit(): void {
  }

  sendData(id){
    this.finalData.push(this.initialData.splice(id, 1));
  }

  sendDataBack(id) {
   this.initialData.push(this.finalData.splice(id, 1));
  }

  sendAllData(){
    this.finalData = this.finalData.concat(this.initialData);
    this.initialData.splice(0, this.initialData.length);
  }

  clearAllData(){
    this.initialData = this.initialData.concat(this.finalData);
    this.finalData.splice(0, this.finalData.length);
  }
}
