"use strict";

/* Example 1: Chart
var data = [4, 8, 15, 16, 23, 42];

d3.select(".chart")
.selectAll("div")
  .data(data)
.enter().append("div")
  .style("width", function (d) { return d * 10 + "px"; })
  .text(function (d) { return d; });
*/

/* Example 2: Circles 

var svg = d3.select("svg");

var circle = svg.selectAll("circle").data([32, 51, 112, 80, 62, 54]);

var circlesEnter = circle.enter().append("circle");

circle.style("fill", "steelblue");

randomCircles();

function randomCircles() {
	
	circle.attr("cy", 60)
		.attr("cx", function () { return Math.random() * 578; })
		.attr("r", function (d) { return Math.sqrt(d) * Math.random() * 2 + 5; })
		.attr("cx", function (d, i) { return i * 100 + 30; })
		.data([32, 67])
		.exit().remove();
	
	setTimeout(randomCircles, 123);
	
}*/