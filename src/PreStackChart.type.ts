export interface PreStackChartRowData {
  name : string,
  start : number,
  end : number,
  color : string
}
export interface PreStackChartRows {
  title : string,
  render : string,
  data : PreStackChartRowData[]
}
export interface PreStackChartData {
  xAxis : {
    name : string,
    start : number,
    end : number,
    interval : number,
  },
  dataset : PreStackChartRows[]
}
