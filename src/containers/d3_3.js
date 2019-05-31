// import React, { Component } from "react";
// import * as Style from "./css";
// import * as d3 from "d3";

// export class PieGraph extends Component {
//   componentDidMount() {
//     this.pie();
//   }
//   componentDidUpdate(prevProps) {
//     if (this.props.data !== prevProps.data) {
//       this.pie();
//     }
//   }
//   pie = () => {
//     const { csNa, data, svgSetup } = this.props;
//     let svgWidth = svgSetup.width,
//       svgHeight = svgSetup.height,
//       radius = Math.min(svgWidth, svgHeight) / 2; // 避免爆圖，要符合最小邊(選小的值)
//     let svg = d3
//       .select(`.${csNa} svg`)
//       .attr("width", svgWidth)
//       .attr("height", svgHeight); // 顯示大小
//     let g = svg // 整個圓的位置顯現 剩下的四分之三
//       .append("g")
//       .attr("transform", "translate(" + radius + "," + radius + ")");
//     let color = d3.scaleOrdinal(d3.schemeCategory10); // 色彩自動選擇
//     let pie = d3.pie().value(function(d) {
//       // 圓餅圖 各個的值 導入
//       return d.percentage;
//     });
//     let path = d3
//       .arc() // 弧
//       .outerRadius(radius) // 外圈大小
//       .innerRadius(0); // 內圈大小
//     let arc = g // 扇形
//       .selectAll("arc")
//       .data(pie(data))
//       .enter()
//       .append("g");
//     arc
//       .append("path") // 內圈到外圈之間的範圍塗滿顏色
//       .attr("d", path)
//       .attr("fill", function(d) {
//         // 照百分比填滿顏色，不然只會有一個顏色
//         return color(d.data.percentage);
//       });
//     arc
//       .append("text")
//       .each(function(d) {
//         let centroid = path.centroid(d);
//         d3.select(this)
//           .attr("x", centroid[0])
//           .attr("y", centroid[1]);
//       })
//       .attr("text-anchor", "middle")
//       .attr("dy", "0em")
//       .text(function(d) {
//         let keys = Object.keys(d.data);
//         return d.data[keys[0]];
//       });
//     arc
//       .append("text")
//       .each(function(d) {
//         let centroid = path.centroid(d);
//         d3.select(this)
//           .attr("x", centroid[0])
//           .attr("y", centroid[1]);
//       })
//       .attr("text-anchor", "middle")
//       .attr("dy", "1em")
//       .text(function(d) {
//         let keys = Object.keys(d.data);
//         return d.data[keys[1]] + "%";
//       });
//   };
//   render() {
//     const { csNa } = this.props;
//     return (
//       <div className={csNa}>
//         <svg />
//       </div>
//     );
//   }
// }

// export default PieGraph;
