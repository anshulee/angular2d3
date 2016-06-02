import {Component, DoCheck, ElementRef, Input, OnInit, OnChanges, SimpleChange} from "@angular/core";
import {Inject} from "@angular/core";
import * as d3 from "d3";

@Component({
  selector: "sg-bar-graph",
  template: ``
})

export class BarGraphComponent implements OnInit/*, OnChanges, DoCheck*/ {
  length: number;
  divs: any;
  @Input() bardata: Array<number>;
  @Input() width: string;
  @Input() height: string;

  constructor( @Inject(ElementRef) elementRef: ElementRef) {
    let element: any = elementRef.nativeElement;
    let graph: any = d3.select(element);

    this.divs = graph.
      append("div")
      .attr({
        "class": "chart"
      })
      .selectAll("div")
      .style({
        "width": this.width + "px",
        "height": this.height + "px",
      });
  }

  ngOnInit() {
    this.render(this.bardata);
    d3.selectAll(".chart div")
      .on("click", (ev) => this.click(ev));
  }

  // Following code to be uncommented when we are trying to observe changes. Then we might not render onint.
  /*ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    for (let propName in changes) {
      let prop = changes[propName];
      let cur = JSON.stringify(prop.currentValue);
      let prev = JSON.stringify(prop.previousValue);
      //  alert(prev+","+cur);
      let num: Array<number> = prop.currentValue;
      this.render(num);
    }
  }

  ngDoCheck() {
    // alert("check called");
    if (this.length != this.bardata.length) {
      this.length = this.bardata.length;
      this.render(this.bardata);
    }
  }*/

  render(newValue) {
    if (!newValue) return;
    this.divs.data(newValue).enter().append("div")
      .transition().ease("elastic")
      .style("width", d => d + "%")
      .text(d => d + "%");
  }

  click(data) {
    alert("clicked: " + JSON.stringify(data));
  }
}
