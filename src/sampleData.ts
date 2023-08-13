import { PreStackChartData } from './PreStackChart.type';


export const sampleData:PreStackChartData = {
  xAxis : {
    name : '연도',
    start : 6,
    end : 23,
    interval : 1,
  },
  dataset : [
    {
      title : '담당포지션',
      render : 'normal',
      data : [
        {
          name : 'A.T',
          start : 6,
          end : 7,
          color : 'purple1'
        },
        {
          name : 'BoWhatDot',
          start : 7,
          end : 8.2,
          color: 'purple1'
        },
        {
          name : '신사업개발총괄',
          start : 8.2,
          end : 10.7,
          color: 'purple1'
        },
        {
          name : '석유',
          start: 10.7,
          end : 13.2,
          color: 'purple2'
        },
        {
          name : '카자흐스탄 주재법인장',
          start: 13.2,
          end : 16,
          color: 'purple2'
        },
        {
          name : 'RO필터사업담당',
          start: 16,
          end : 20.6,
          color: 'purple3'
        },
        {
          name : '경영전략총괄',
          start: 20.6,
          end : 23,
          color: 'purple3'
        },
      ]
    },

    {
      title : '제품 경험',
      render : 'normal',
      data : [
        {
          name : '사람테스트',
          start : 6,
          end : 7,
          color : 'blue1'
        },
        {
          name : '화학사업전반',
          start : 7,
          end : 10.7,
          color: 'blue1'
        },
        {
          name : '석유화학사업',
          start : 10.7,
          end : 14.3,
          color: 'blue2'
        },
        {
          name : 'RO필터',
          start : 14.3,
          end : 18.4,
          color: 'blue2'
        },
        {
          name : 'RO필터',
          start : 18.4,
          end : 23,
          color: 'blue3'
        },
      ]
    },
    {
      title : '직무경험',
      render : 'normal',
      data : [
        {
          name : '전략',
          start : 6,
          end : 7,
          color:'red1'
        },
        {
          name : '사업개발',
          start : 7,
          end : 14,
          color:'red2'
        },
        {
          name : '사업총괄',
          start : 14,
          end : 18.1,
          color:'red2'
        },
        {
          name : '전략',
          start : 18.1,
          end : 20.9,
          color:'red3'
        },
        {
          name : '사업총괄',
          start : 20.9,
          end : 23,
          color:'red3'
        }
      ]
    },
  ]
}