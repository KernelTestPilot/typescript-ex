import React from 'react';

/*
  User story: 2:1
  Component: 2/4
  Description: Renders Days/Hours in bookTable
*/

interface BookingTheadProps {
   dateString: string [],
    weekdays: string[],
}

export default function BookingThead({weekdays, dateString}: BookingTheadProps): JSX.Element {

  function getFormatedDateString(day: string, index: number): string {
    return `${day} ${dateString[index].substring(5, dateString[index].length)}`;
  }

  function createDayThElement(day: string, index: number): JSX.Element {
    return <th key={index}><p>{getFormatedDateString(day, index)}</p></th>;
  }

  return (
    <thead>
      <tr>
        <th><p>Dag/Tid</p></th>
        {weekdays.map(createDayThElement)}
      </tr>
    </thead>
  )
}
