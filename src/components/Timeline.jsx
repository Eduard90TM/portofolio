import React from 'react';
import {timelinedata} from '../data/timeline';
import Timelineitem from './Timelineitem';
import Title from './Title';

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {timelinedata.map((item, i) => (
          <Timelineitem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
