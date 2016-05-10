import * as angular from '@angular/core';
import {Component, Input, Directive, Attribute, OnChanges,DoCheck, ElementRef, OnInit, SimpleChange} from '@angular/core';
import {Inject} from '@angular/core';
import * as d3 from 'd3';

@Directive({
  selector:   'bar-graph',
  inputs:['bardata']
  
})



export class BarGraph implements  OnInit  {
bardata:Array<number>;
length:number;
  divs: any;
  constructor(
    @Inject(ElementRef) elementRef: ElementRef,
    @Attribute('width') width: string,
    @Attribute('height') height: string) {

    
    var el:any    = elementRef.nativeElement;
    var graph:any = d3.select(el);

    this.divs = graph.
      append('div').
      attr({
        'class': 'chart'
      }).
      style({
        'width':  width  + 'px',
        'height': height + 'px',
      }).
      selectAll('div');
  }
   ngOnInit(){
   
   }

  render(newValue) {
    if (!newValue) return;
    this.divs.data(newValue).enter().append('div')
      .transition().ease('elastic')
      .style('width', d => d + '%')
      .text(d => d + '%');

  }
ngDoCheck()
{
 // alert("check called");
 
 if(this.length!=this.bardata.length)
 {this.length= this.bardata.length;
  this.render(this.bardata);
  }
}
ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
  
  for (let propName in changes) {
    let prop = changes[propName];
    let cur  = JSON.stringify(prop.currentValue);
    let prev = JSON.stringify(prop.previousValue);
  //  alert(prev+","+cur);
   let num :Array<number>= prop.currentValue;
//this.render(num);


    
}}}
