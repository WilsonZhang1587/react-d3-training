function bar() {
  let margin = { top: 10, right: 10, bottom: 10, left: 10 };
  let width =
      barList.svgSetup.width -
      margin.right -
      margin.left,
    svgWidth = barList.svgSetup.width,
    height =
      barList.svgSetup.height -
      margin.top -
      margin.bottom * 2,
    svgHeight = barList.svgSetup.height,
    keys = Object.keys(barList.data[0]);

  let x = d3
    .scaleBand()
    .domain(barList.data.map(d => d[keys[0]]))
    .rangeRound([0, width])
    .padding(0.6);
  let y = d3
    .scaleLinear()
    .domain([0, d3.max(barList.data.map(d => d[keys[1]]))])
    .rangeRound([height, 0]);

  let xAxis = d3.axisBottom().scale(x);
  let yAxisLeft = d3
    .axisLeft()
    .scale(y)
    .ticks(barList.data.length);

  let svg = d3
    .select(".bar svg")
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

  svg
    .append("g")
    .attr(
      "transform",
      "translate(" + margin.left + "," + height + ")"
    )
    .call(xAxis);

  svg
    .append("g")
    .attr("transform", "translate(" + margin.left + ",0)")
    .call(yAxisLeft)
    .append("text")
    .attr("y", 6)
    .attr("dy", "-2em")
    .style("text-anchor", "end");

  let bars = svg
    .append("g")
    .attr("transform", "translate(" + margin.right + ",0)")
    .selectAll("rect")
    .data(barList.data)
    .enter();

  bars
    .append("rect")
    .attr("x", d => x(d[keys[0]]))
    .attr("width", x.bandwidth() / 1)
    .attr("y", d => y(d[keys[1]]))
    .attr("height", d => height - y(d[keys[1]]))
    .attr("fill", barList.svgSetup.barColor);
}
bar();
