/** @jsxImportSource @emotion/react */


import styled from '@emotion/styled';
import {CSSObject} from '@emotion/styled';

// 전체 wrapper
export const PreStackAllWrap = styled('div')({
  display:'flex',
  position:'relative',
})

//title 별도 wrapper
export const PreStackRowTitleWrap = styled('div')({
  marginRight:'26px',
  width:'72px'
})

// title
export const PreStackRowTitle = styled('div')({
  fontSize:'16px',
  fontWeight:'700',
  lineHeight:'32px',
  height:'32px',
  color:'#2C3238',
  width:'72px',
})

// stack들 전체 wrap
export const PreStackWrap = styled('div')({
  borderLeft: '1px solid #DAE3ED',
  borderBottom: '1px solid #DAE3ED',
  flex:1,
  position:'relative',
  display:'flex',
  flexDirection:'column',
  justifyContent:'stretch'
})

// row wrap 
export const StyledRowWrap = styled('div')({
  display:'flex',
  height:'32px',
  zIndex:1
})

// inner Unit
export const StyledInnerUnit = styled('div')(({color, isWhite}:{color:string, isWhite?:boolean})=>{
  return({
    height:'32px',
    fontSize:'14px',
    fontWeight:'700',
    color:isWhite ? '#fff' : '#424952',
    lineHeight:'32px',
    background : color,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:'4px',
    flex:'0 0 auto',
  })
})

// unit style
export const PreStackUnit = ({color, unitWidth, title, isWhite, style}:{color:string, unitWidth:number, title:string, isWhite?:boolean, style?:CSSObject})=>{
  return(
    <div css={{width:`${unitWidth}px`, paddingLeft:'2px', paddingRight:'2px', boxSizing:'border-box', ...style}}>
      <StyledInnerUnit color={color} isWhite={isWhite}>
        <span css={{padding:'0px 12px', overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis' }}>{title}</span>
      </StyledInnerUnit>
    </div>
  )
}

//year Axis
export const YearAxisWrap = styled('div')({
  display: 'flex',

})

//divide line
export const DivideByFiveVertical = styled('div')({
  flex:1,
  width:'1px',
  background:'#E9EFF5',
  height:'100%',
  position:'absolute',
})

export const YearTypo = styled('div')({
    fontSize:'14px',
    fontWeight:'700',
    color:'#6B7682',
    position:'absolute',
    top:'50%',
    transform:'translateY(-50%)'
})
