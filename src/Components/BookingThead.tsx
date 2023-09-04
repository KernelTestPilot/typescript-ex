
import Calendar from '../Services/Calendar';
import React, { useState,useEffect} from 'react';
interface BookingTheadProps {
   dateString: String [],
    weekdays: String[],
}

export default function BookingThead({weekdays, dateString}: BookingTheadProps) {
  return (
    <thead>
      <tr>
        <th><p>Dag/Tid</p></th>
        {weekdays.map((day, index) => {
          const combinedValue = `${day} ${dateString[index].substring(5, dateString[index].length)}`;
          return <th key={index}><p>{combinedValue}</p></th>;
        })}
      </tr>
    </thead>
  )
}
