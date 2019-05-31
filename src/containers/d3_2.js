import * as d3 from "d3";
export default function d3_2() {
  // txt
  //   d3.select(".txt")
  //     .select("h1")
  //     .style("color", "red")
  //     .text("First");
  //   d3.select(".txt")
  //     .append("p")
  //     .text("Second");
  //   d3.select(".txt")
  //     .append("p")
  //     .text("Third");
  //   d3.selectAll("p").style("color", "blue");
  //------------------------------------------
    // var data = [1, 2, 3, 4, 5];
    // d3.select(".dataSet")
    //   .selectAll("p")
    //   .data(data)
    //   .enter()
    //   .append("p")
    //   // .text("dataSet");
    //   .text(function(d) {
    //     return d;
    //   });
  //------------------------------------------
  // var dataSet = [80, 100, 56, 120, 180, 30, 40, 120, 160];
  // var svgWidth = 500,
  //   svgHeight = 300,
  //   barpadding = 5;
  // var barWidth = svgWidth / dataSet.length;
  // var svg = d3
  //   .select(".svgBar")
  //   .select("svg")
  //   .attr("width", svgWidth)
  //   .attr("height", svgHeight);
  // var barChart = svg
  //   .selectAll("rect")
  //   .data(dataSet)
  //   .enter()
  //   .append("rect")
  //   .attr("y", function(d) {
  //     return svgHeight - d; // y 座標
  //   })
  //   .attr("height", function(d) {
  //     return d; //長條圖 數據高
  //   })
  //   .attr("width", barWidth - barpadding) // 長條圖寬 -> 減掉間隔寬
  //   .attr("transform", function(d, i) {
  //     var translate = [barWidth * i, 0]; // 座標橫移 (x軸) -> 避免重疊
  //     return "translate(" + translate + ")";
  //   });
  // //*****************************
  //   var text = svg
  //     .selectAll("text")
  //     .data(dataSet)
  //     .enter()
  //     .append("text")
  //     .text(function(d) {
  //       return d; // 文字內容
  //     })
  //     .attr("y", function(d) {
  //       return svgHeight - d - 2; // 文字高度
  //     })
  //     .attr("x", function(d, i) {
  //       return barWidth * i; // 文字座標橫移 (X軸)
  //     })
  //     .attr("fill", "red"); // 顏色
  //------------------------------------------
    // var dataSet = [1, 2, 3, 4, 5];
    // var svgWidth = 500,
    //   svgHeight = 300,
    //   barpadding = 5;
    // var barWidth = svgWidth / dataSet.length;
    // var svg = d3
    //   .select(".svgBar")
    //   .select("svg")
    //   .append("g")
    //   .attr("width", svgWidth)
    //   .attr("height", svgHeight);
    // var yScale = d3
    //   .scaleLinear() //等比例尺
    //   .domain([0, d3.max(dataSet)]) //data資料值的範圍 -> domain
    //   .range([0, svgHeight]); //自定義範圍 -> range
    // var barChart = svg
    //   .selectAll("rect")
    //   .data(dataSet)
    //   .enter()
    //   .append("rect")
    //   .attr("y", function(d) {
    //     return svgHeight - yScale(d); // y 座標 -> 透過 yScale 調整比例
    //   })
    //   .attr("height", function(d) {
    //     return yScale(d); //長條圖 數據高 -> 透過 yScale 調整比例
    //   })
    //   .attr("width", barWidth - barpadding)
    //   .attr("transform", function(d, i) {
    //     var translate = [barWidth * i, 0];
    //     return "translate(" + translate + ")";
    //   });
  //------------------------------------------
    var data = [80, 100, 56, 120, 180, 30, 40, 120, 160];
    var svgWidth = 500,
      svgHeight = 300;
    var svg = d3
      .select(".svgBar")
      .select("svg")
      .attr("width", svgWidth)
      .attr("height", svgHeight);
    var xScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, svgHeight]); // 從左到右
    var yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([svgHeight, 0]); // 從上到下
    var x_axis = d3.axisBottom().scale(xScale);
    var y_axis = d3.axisLeft().scale(yScale);
    svg
      .append("g")
      .attr("transform", "translate(50,10)")
      .call(y_axis);
    var xAxisTranslate = svgHeight - 20;
    svg
      .append("g")
      .attr("transform", "translate(50," + xAxisTranslate + ")")
      .call(x_axis);
  //------------------------------------------
  // var data = [
  //   { platform: "Android", percentage: 20.11 },
  //   { platform: "Windows", percentage: 36.69 },
  //   { platform: "ios", percentage: 13.06 },
  //   { platform: "OSX", percentage: 20.06 }
  // ];
  // var svgWidth = 500,
  //   svgHeight = 300,
  //   radius = Math.min(svgWidth, svgHeight) / 2; // 避免爆圖，要符合最小邊
  // var svg = d3
  //   .select("svg")
  //   .attr("width", svgWidth)
  //   .attr("height", svgHeight); // 顯示大小
  // var g = svg // 整個大圓
  //   .append("g")
  //   .attr("transform", "translate(" + radius + "," + radius + ")");
  // var color = d3.scaleOrdinal(d3.schemeCategory10); // 填色自動
  // var pie = d3.pie().value(function(d) {
  //   // 圓餅圖 各個的值 導入
  //   return d.percentage;
  // });
  // var path = d3
  //   .arc() // 弧
  //   .outerRadius(radius) // 外圈大小
  //   .innerRadius(0); // 內圈大小
  // var arc = g // 扇形
  //   .selectAll("arc")
  //   .data(pie(data))
  //   .enter()
  //   .append("g");
  // arc
  //   .append("path")
  //   .attr("d", path)
  //   .attr("fill", function(d) {
  //     return color(d.data.percentage);
  //   });
  //------------------------------------------------------------------
  // const api =
  //   "https://api.coindesk.com/v1/bpi/historical/close.json?start=2017-12-31&end=2018-04-01";

  // document.addEventListener("DOMContentLoaded", function(event) {
  //   fetch(api) // fetch data
  //     .then(res => res.json())
  //     .then(data => {
  //       var parsedData = parseData(data); // data push to array[]
  //       drawChart(parsedData); // data 導入到曲線圖中
  //     })
  //     .catch(err => console.log(err));
  // });

  // function parseData(data) {
  //   var arr = [];
  //   for (var i in data.bpi) {
  //     arr.push({
  //       date: new Date(i),
  //       value: +data.bpi[i]
  //     });
  //   }
  //   return arr;
  // }

  // function drawChart(data) {
  //   var svgWidth = 600,
  //     svgHeight = 400;
  //   var margin = { top: 20, right: 20, bottom: 30, left: 50 };
  //   var width = svgWidth - margin.left - margin.right;
  //   var height = svgHeight - margin.top - margin.bottom;
  //   var svg = d3
  //     .select(".svgBar")
  //     .select("svg")
  //     .attr("width", svgWidth)
  //     .attr("height", svgHeight);
  //   var g = svg
  //     .append("g")
  //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  //   //  ↓比例尺 要帶入實際值
  //   var x = d3.scaleTime().rangeRound([0, width]);
  //   var y = d3.scaleLinear().rangeRound([height, 0]); // rangeRound -> 返回的數值就不會是小數而是整數
  //   var line = d3
  //     .line()
  //     .x(function(d) {
  //       return x(d.date);
  //     })
  //     .y(function(d) {
  //       return y(d.value);
  //     });
  //   x.domain(
  //     d3.extent(data, function(d) {
  //       // extent -> 返回 [] 最大最小值
  //       return d.date;
  //     })
  //   );
  //   y.domain(
  //     d3.extent(data, function(d) {
  //       return d.value;
  //     })
  //   );
  //   g.append("g")
  //     .attr("transform", "translate(0," + height + ")")
  //     .call(d3.axisBottom(x)) // call() 呼叫
  //     .select(".domain")
  //     .remove(); // 去掉 Bottom 線
  //   g.append("g")
  //     .call(d3.axisLeft(y))
  //     .append("text")
  //     .attr("fill", "#000")
  //     .attr("transform", "rotate(-90)")
  //     .attr("y", 6)
  //     .attr("dy", "0.71em")
  //     .attr("text-anchor", "end")
  //     .text("Price ($)");
  //   g.append("path")
  //     .datum(data)
  //     .attr("fill", "none")
  //     .attr("stroke", "steelblue") // 線條 & 顏色
  //     .attr("stroke-linejoin", "round") // 線條開始時的形狀 -> 半圓
  //     .attr("stroke-linecap", "round") // 線條結束時的形狀 -> 半圓
  //     .attr("stroke-width", 1.5)
  //     .attr("d", line);
  // }
}
