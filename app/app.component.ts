import { Component, OnInit } from '@angular/core';
import{BarGraph} from './bargraph';

@Component({
  selector: 'my-app',
  directives: [BarGraph],
  template: `<h1>My First Angular 2 d3 App</h1>
  <div>
   <bar-graph
   [bardata]="graphData"
    width="1000"
    height="130"
  >
  </bar-graph>
  </div>`
})
export class AppComponent implements OnInit
{
    graphData:Array<number>;
      ngOnInit()
      {
                this.graphData = [10,2,34,45,67]
      }
    
}
