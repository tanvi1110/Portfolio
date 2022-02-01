import React from 'react';
import Seperator from '../../common/seperator';
import './work.css';
import {WorkData} from '../../data/work';
function Work() {
  const data = WorkData;
  return (
  <div className='work'>
    {/* <Seperator /> */}
    <label className='section-title'></label>
   <div className='work-list'>
     {data.map((item)=>{
       return
     })}
   </div>
  </div>
  );
}

export default Work;
