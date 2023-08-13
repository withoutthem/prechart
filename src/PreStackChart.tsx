/** @jsxImportSource @emotion/react */
import React from 'react';
import {useState} from 'react'

import styled from '@emotion/styled';

import {PreStackChartData} from './PreStackChart.type';

import { 
  PreStackAllWrap,
  PreStackRowTitleWrap,
  PreStackRowTitle,
  PreStackWrap,
  StyledRowWrap,
  PreStackUnit,
  DivideByFiveVertical,
  YearAxisWrap,
  YearTypo
} from './StyledPreStackChart';

interface Pallete {
  [key:string] : string
}

const pallete:Pallete = {
  'purple1' : '#F4EBFF',
  'purple2' : '#DEC7FF',
  'purple3' : '#B280FF',
  'blue1': '#E7F8FB',
  'blue2': '#C6EAF0',
  'blue3': '#56CDE0',
  'red1' : '#F9DCDE',
  'red2' : '#FFCDD0',
  'red3' : '#FE7A7A',
}

const Dummy = styled('div')(({width}:{width:number})=>{
  return({
    width:`${width}px`,
    height:'32px'
  })
})

const formatNumber = (n:number) => {
  return n < 10 ? `0${n}` : `${n}`;
}

const PreStackChart = ({data, width}:{data:PreStackChartData, width:number})=>{

  const [nowWidth] = useState(width);
  const unitWidth = nowWidth / (data.xAxis.end - data.xAxis.start);

  return(
    <div>
      <PreStackAllWrap css={{width:width}}>
        <PreStackRowTitleWrap>
          {
            data.dataset.map((row, idx) => {
              return(
                <PreStackRowTitle key={row.title + idx}  css={{marginBottom: data.dataset.length === idx+1 ? '12px' :'20px' }} >
                  {row.title}
                </PreStackRowTitle>
              )
            })
          }
        </PreStackRowTitleWrap>
        <PreStackWrap>
          {
            data.dataset.map((row, idx) => {
              return(
                <StyledRowWrap key={row.title + idx} css={{marginBottom: data.dataset.length === idx+1 ? '12px' :'20px' }}>
                  {
                    row.data.map((unit,idx) =>{
                      return (
                        <React.Fragment key={unit.name + idx + unit.start+ unit.end}>
                        {
                          unit.start - row.data[idx-1]?.end > 0 &&
                          <Dummy width={unitWidth * (unit.start - row.data[idx-1]?.end)}/>
                        }
                        <PreStackUnit                      
                        color={pallete[unit.color]}
                        title={unit.name}
                        unitWidth={unitWidth * (unit.end - unit.start)}
                        style={{paddingRight : row.data.length === idx+1 ? '0px': '4px'}}
                        isWhite={unit.color.includes('3') ? true : false}
                        />
                        </React.Fragment>
                      )
                    })
                  }
                </StyledRowWrap>
              )
            })
          }

          {
            Array.from({ length: Math.floor((data.xAxis.end - data.xAxis.start) / 5) }).map((line, idx) => (
              <DivideByFiveVertical key={idx} css={{left:(idx+1)*4*unitWidth}}></DivideByFiveVertical>
            ))
          }
        </PreStackWrap>
      </PreStackAllWrap>

      <YearAxisWrap css={{marginTop:'6px'}}>
      <PreStackRowTitleWrap css={{height:'24px'}}>
        <PreStackRowTitle css={{lineHeight:'24px', height:'24px'}}>
          연도  
        </PreStackRowTitle>
      </PreStackRowTitleWrap>
      <div css={{display:'flex', position:'relative'}}>
        {
          Array.from({ length: Math.floor(data.xAxis.end - data.xAxis.start+1) }).map((line, idx) => {
            return(
              <YearTypo css={{left:(unitWidth*idx > 0 ? unitWidth*idx -4 : 0)}}>
                {formatNumber(data.xAxis.start + idx)+ '’'} 
              </YearTypo>
            )
          })
        }
      </div>
      </YearAxisWrap>

    </div>
  )
}

export default PreStackChart;