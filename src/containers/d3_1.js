import * as d3 from "d3";
export default function d3_1() {
  var data = [30, 86, 168, 281, 303, 365];

  var scale = d3.scaleLinear() //等比例尺
    .domain([0, 365]) //data資料值的範圍 -> domain
    .range([0, 300]); //自定義範圍 -> range

  d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .style("width", function(d) {
      return scale(d) + "px";
    })
    .text(function(d) {
      return "$ " + d;
    });
}
