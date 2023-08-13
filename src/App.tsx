/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import PreStackChart from './PreStackChart';
import { PreStackChartData } from './PreStackChart.type';
import {sampleData} from './sampleData';



function App() {

  const [nowData, setNowData] = useState<PreStackChartData>();

  useEffect(()=>{
    setNowData(sampleData)
  },[])

  return (
    <div className="App" style={{fontFamily:'Pretendard'}}>
      
    {
      nowData && <PreStackChart data={nowData} width={892}/>
    }
    

    </div>
  );
}

export default App;
