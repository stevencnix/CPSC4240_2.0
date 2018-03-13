
// Set the dimensions of the canvas / graph
var	margin = {top: 30, right: 20, bottom: 50, left: 50},
	width = 400 - margin.left - margin.right,
	height = 220 - margin.top - margin.bottom;

// Parse the date / time
var parseTime = d3.time.format("%d/%m/%Y %H:%M:%S").parse;

// Set the ranges
var	x = d3.time.scale().range([0, width]);
var	y = d3.scale.linear().range([height, 0]);

// Define the axes
var	xAxis = d3.svg.axis().scale(x)
	.orient("bottom").ticks(10);

var	yAxis = d3.svg.axis().scale(y)
	.orient("left").ticks(10);

// Define the line
var	cpu0Line = d3.svg.line()
	.x(function(d) { return x(d.time); })
	.y(function(d) { return y(d.cpu0); });

var	cpu1Line = d3.svg.line()
	.x(function(d) { return x(d.time); })
	.y(function(d) { return y(d.cpu1); });

var	cpu2Line = d3.svg.line()
	.x(function(d) { return x(d.time); })
	.y(function(d) { return y(d.cpu2); });

var	cpu3Line = d3.svg.line()
	.x(function(d) { return x(d.time); })
	.y(function(d) { return y(d.cpu3); });

var	cpu4Line = d3.svg.line()
	.x(function(d) { return x(d.time); })
	.y(function(d) { return y(d.cpu4); });

var	cpu5Line = d3.svg.line()
	.x(function(d) { return x(d.time); })
	.y(function(d) { return y(d.cpu5); });

var	cpu6Line = d3.svg.line()
	.x(function(d) { return x(d.time); })
	.y(function(d) { return y(d.cpu6); });

var	cpu7Line = d3.svg.line()
	.x(function(d) { return x(d.time); })
	.y(function(d) { return y(d.cpu7); });



// Adds the svg canvas
var	chart0 = d3.select("body")
	.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Adds the svg canvas
var	chart1 = d3.select("body")
	.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Adds the svg canvas
var	chart2 = d3.select("body")
	.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var	chart3 = d3.select("body")
	.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Adds the svg canvas
var	chart4 = d3.select("body")
	.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Adds the svg canvas
var	chart5 = d3.select("body")
	.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Adds the svg canvas
var	chart6 = d3.select("body")
	.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Adds the svg canvas
var	chart7 = d3.select("body")
	.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("data/log.csv", function(error, data) {
	data.forEach(function(d) {
		d.time = parseTime(d.time);
		d.cpu0 = +d.cpu0;
	});

	// Scale the range of the data
	x.domain(d3.extent(data, function(d) { return d.time; }));
	y.domain([0, d3.max(data, function(d) { return d.cpu0; })]);

	// Add the valueline path.
	chart0.append("path")
		.attr("class", "line")
		.attr("d", cpu0Line(data));

	// Add the X Axis
	chart0.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.selectAll("text")
    	.attr("y", 0)
    	.attr("x", 9)
    	.attr("dy", ".35em")
    	.attr("transform", "rotate(90)")
    	.style("text-anchor", "start");

	// Add the Y Axis
	chart0.append("g")
		.attr("class", "y axis")
		.call(yAxis);

});

d3.csv("data/log.csv", function(error, data) {
	data.forEach(function(d) {
		d.time = parseTime(d.time);
		d.cpu1 = +d.cpu1;
	});

	// Scale the range of the data
	x.domain(d3.extent(data, function(d) { return d.time; }));
	y.domain([0, d3.max(data, function(d) { return d.cpu1; })]);

	// Add the valueline path.
	chart1.append("path")
		.attr("class", "line")
		.attr("d", cpu1Line(data));

	// Add the X Axis
	chart1.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.selectAll("text")
    	.attr("y", 0)
    	.attr("x", 9)
    	.attr("dy", ".35em")
    	.attr("transform", "rotate(90)")
    	.style("text-anchor", "start");

	// Add the Y Axis
	chart1.append("g")
		.attr("class", "y axis")
		.call(yAxis);

});

d3.csv("data/log.csv", function(error, data) {
	data.forEach(function(d) {
		d.time = parseTime(d.time);
		d.cpu2 = +d.cpu2;
	});

	// Scale the range of the data
	x.domain(d3.extent(data, function(d) { return d.time; }));
	y.domain([0, d3.max(data, function(d) { return d.cpu2; })]);

	// Add the valueline path.
	chart2.append("path")
		.attr("class", "line")
		.attr("d", cpu2Line(data));

	// Add the X Axis
	chart2.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.selectAll("text")
    	.attr("y", 0)
    	.attr("x", 9)
    	.attr("dy", ".35em")
    	.attr("transform", "rotate(90)")
    	.style("text-anchor", "start");

	// Add the Y Axis
	chart2.append("g")
		.attr("class", "y axis")
		.call(yAxis);

});

d3.csv("data/log.csv", function(error, data) {
	data.forEach(function(d) {
		d.time = parseTime(d.time);
		d.cpu3 = +d.cpu3;
	});

	// Scale the range of the data
	x.domain(d3.extent(data, function(d) { return d.time; }));
	y.domain([0, d3.max(data, function(d) { return d.cpu3; })]);

	// Add the valueline path.
	chart3.append("path")
		.attr("class", "line")
		.attr("d", cpu3Line(data));

	// Add the X Axis
	chart3.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.selectAll("text")
    	.attr("y", 0)
    	.attr("x", 9)
    	.attr("dy", ".35em")
    	.attr("transform", "rotate(90)")
    	.style("text-anchor", "start");

	// Add the Y Axis
	chart3.append("g")
		.attr("class", "y axis")
		.call(yAxis);

});

d3.csv("data/log.csv", function(error, data) {
	data.forEach(function(d) {
		d.time = parseTime(d.time);
		d.cpu4 = +d.cpu4;
	});

	// Scale the range of the data
	x.domain(d3.extent(data, function(d) { return d.time; }));
	y.domain([0, d3.max(data, function(d) { return d.cpu4; })]);

	// Add the valueline path.
	chart4.append("path")
		.attr("class", "line")
		.attr("d", cpu4Line(data));

	// Add the X Axis
	chart4.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.selectAll("text")
    	.attr("y", 0)
    	.attr("x", 9)
    	.attr("dy", ".35em")
    	.attr("transform", "rotate(90)")
    	.style("text-anchor", "start");

	// Add the Y Axis
	chart4.append("g")
		.attr("class", "y axis")
		.call(yAxis);

});

d3.csv("data/log.csv", function(error, data) {
	data.forEach(function(d) {
		d.time = parseTime(d.time);
		d.cpu5 = +d.cpu5;
	});

	// Scale the range of the data
	x.domain(d3.extent(data, function(d) { return d.time; }));
	y.domain([0, d3.max(data, function(d) { return d.cpu5; })]);

	// Add the valueline path.
	chart5.append("path")
		.attr("class", "line")
		.attr("d", cpu5Line(data));

	// Add the X Axis
	chart5.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.selectAll("text")
    	.attr("y", 0)
    	.attr("x", 9)
    	.attr("dy", ".35em")
    	.attr("transform", "rotate(90)")
    	.style("text-anchor", "start");

	// Add the Y Axis
	chart5.append("g")
		.attr("class", "y axis")
		.call(yAxis);

});

d3.csv("data/log.csv", function(error, data) {
	data.forEach(function(d) {
		d.time = parseTime(d.time);
		d.cpu6 = +d.cpu6;
	});

	// Scale the range of the data
	x.domain(d3.extent(data, function(d) { return d.time; }));
	y.domain([0, d3.max(data, function(d) { return d.cpu6; })]);

	// Add the valueline path.
	chart6.append("path")
		.attr("class", "line")
		.attr("d", cpu6Line(data));

	// Add the X Axis
	chart6.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.selectAll("text")
    	.attr("y", 0)
    	.attr("x", 9)
    	.attr("dy", ".35em")
    	.attr("transform", "rotate(90)")
    	.style("text-anchor", "start");

	// Add the Y Axis
	chart6.append("g")
		.attr("class", "y axis")
		.call(yAxis);

});

d3.csv("data/log.csv", function(error, data) {
	data.forEach(function(d) {
		d.time = parseTime(d.time);
		d.cpu7 = +d.cpu7;
	});

	// Scale the range of the data
	x.domain(d3.extent(data, function(d) { return d.time; }));
	y.domain([0, d3.max(data, function(d) { return d.cpu7; })]);

	// Add the valueline path.
	chart7.append("path")
		.attr("class", "line")
		.attr("d", cpu7Line(data));

	// Add the X Axis
	chart7.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis)
		.selectAll("text")
    	.attr("y", 0)
    	.attr("x", 9)
    	.attr("dy", ".35em")
    	.attr("transform", "rotate(90)")
    	.style("text-anchor", "start");

	// Add the Y Axis
	chart7.append("g")
		.attr("class", "y axis")
		.call(yAxis);

});
