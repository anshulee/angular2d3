import { Component, OnInit } from "@angular/core";
import {BarGraphComponent} from "./bargraph.Component";

@Component({
  selector: "sg-app",
  directives: [BarGraphComponent],
  template: `<h1>Angular 2 d3 App Integration</h1>
  <div>
   <sg-bar-graph
   [bardata]="graphData"
    width="1000"
    height="130">
  </sg-bar-graph>
  </div>`
})

export class AppComponent implements OnInit {
  graphData: Array<number>;

  ngOnInit() {
    this.graphData = [10, 27, 34, 45, 67];
  }
}
