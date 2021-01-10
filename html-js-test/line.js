function line() {
  let margin = { top: 20, right: 20, bottom: 30, left: 50 };
  let width =
      lineList.svgSetup.width -
      margin.right -
      margin.left,
    svgWidth = lineList.svgSetup.width,
    height =
      lineList.svgSetup.height -
      margin.top -
      margin.bottom,
    svgHeight = lineList.svgSetup.height,
    keys = Object.keys(lineList.data[0]);

  let svg = d3
    .select(".line svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .append("g")
    .attr(
      "transform",
      "translate(" +
        margin.right +
        "," +
        margin.top +
        ")"
    );

  let x = d3
    .scalePoint()
    .rangeRound([0, width])
    .domain(lineList.data.map(d => d[keys[0]]));
  let y = d3
    .scaleLinear()
    .rangeRound([height, 0])
    .domain([0, d3.max(lineList.data, d => d[keys[1]])]);

  let line = d3
    .line()
    .x(function(d) {
      let keys = Object.keys(d);
      return x(d[keys[0]]);
    })
    .y(function(d) {
      let keys = Object.keys(d);
      return y(d[keys[1]]);
    });

  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x).ticks(lineList.data.length))
    .append("text")
    .attr("transform", "translate(" + width + ",0)")
    .attr("fill", "#000")
    .attr("dy", "-0.5em")
    .attr("font-size", "12px")
    .text(keys[0]);
  svg
    .append("g")
    .call(d3.axisLeft(y).ticks(lineList.data.length))
    .append("text")
    .attr("fill", "#000")
    .attr("transform", "rotate(-90)")
    .attr("dy", "1.25em")
    .attr("font-size", "12px")
    .text(keys[1]);
  svg
    .append("path")
    .datum(lineList.data)
    .attr("fill", "none")
    .attr("stroke", lineList.svgSetup.lineColor)
    .attr("d", line);
}
line();
