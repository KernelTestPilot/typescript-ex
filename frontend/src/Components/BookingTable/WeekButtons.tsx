import React from "react"

/*
  User story: 3:3
  Component: 1/1
  Description: Renders the buttons to change week in the schedule
*/

interface WeekButtonsProps {
    previousWeekClick: () => void;
    resetOffsetClick: () => void;
    nextWeekClick: () => void;
}

export default function WeekButtons(props: WeekButtonsProps): JSX.Element {
  const { previousWeekClick, resetOffsetClick, nextWeekClick } = props;

  return (
  <>
      <button onClick={previousWeekClick}>Previous week</button>
      <button onClick={resetOffsetClick}>Current week</button>
      <button onClick={nextWeekClick}>Next week</button>
    </>
  )
}
