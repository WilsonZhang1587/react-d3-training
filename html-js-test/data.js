let pieList = {
  data: [
    { platform: "a", percentage: 10 },
    { platform: "b", percentage: 20 },
    { platform: "c", percentage: 30 }
  ],
  svgSetup: {
    width: 500,
    height: 500,
    color: [
      //扇形面積顏色
      "#1f77b4",
      "#ff7f0e",
      "#2ca02c",
      "#d62728",
      "#9467bd",
      "#8c564b",
      "#e377c2",
      "#7f7f7f",
      "#bcbd22",
      "#17becf"
    ],
    strokeColor: "#fff", //扇形邊線顏色
    textColor: "#000" //文字顏色
  }
};
// ---------------------------------------------------------------
let barList = {
  data: [
    //物件第一個參數為x軸，第二個為y軸
    { platform: "a", percentage: 10 },
    { platform: "b", percentage: 20 },
    { platform: "c", percentage: 30 }
  ],
  svgSetup: {
    width: 500,
    height: 500,
    barColor: "#000"
  }
};
// ---------------------------------------------------------------
let lineList = {
  data: [
    //物件第一個參數為x軸，第二個為y軸
    { platform: "a", percentage: 20 },
    { platform: "b", percentage: 10 },
    { platform: "c", percentage: 30 }
  ],
  svgSetup: {
    width: 500,
    height: 500,
    lineColor: "#bc937c"
  }
};
