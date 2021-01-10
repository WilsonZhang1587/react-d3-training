function pie() {
  let margin = { top: 10, right: 10, bottom: 10, left: 10 };
  let svgWidth =
      pieList.svgSetup.width -
      margin.right -
      margin.left,
    svgHeight =
      pieList.svgSetup.height -
      margin.top -
      margin.bottom,
    stateRadius = Math.min(svgWidth, svgHeight) / 2,
    color = d3.scaleOrdinal(pieList.svgSetup.color);

  let svg = d3
    .select(".pie svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .append("g")
    .attr("transform", "translate(" + stateRadius + "," + stateRadius + ")");

  let pie = d3
    .pie()
    .sort(null)
    .value(function(d) {
      return d.percentage;
    });

  let slices = svg.append("g");
  let labels = svg
    .append("g")
    .selectAll("text")
    .data(pie(pieList.data))
    .enter();

  let path = d3
    .arc()
    .outerRadius(stateRadius)
    .innerRadius(0);

  let labelArc = d3
    .arc()
    .outerRadius(stateRadius - (stateRadius * 2) / 4)
    .innerRadius(stateRadius - (stateRadius * 2) / 5);

  slices
    .selectAll("arc")
    .data(pie(pieList.data))
    .enter()
    .append("path")
    .attr("stroke", pieList.svgSetup.strokeColor)
    .attr("d", path)
    .attr("fill", function(d) {
      return color(d.data.percentage);
    });
  labels
    .append("text")
    .attr("transform", function(d) {
      return "translate(" + labelArc.centroid(d) + ")";
    })
    .attr("fill", pieList.svgSetup.textColor)
    .attr("text-anchor", "middle")
    .attr("dy", "0em")
    .text(function(d) {
      let keys = Object.keys(d.data);
      return d.data[keys[0]];
    });
}
pie();
