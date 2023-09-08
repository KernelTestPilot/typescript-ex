
import React from "react"

interface WeekButtonsProps {
    previousWeekClick: () => void;
    resetOffsetClick: () => void;
    nextWeekClick: () => void;
}

export default function WeekButtons(props: WeekButtonsProps) {
  const { previousWeekClick, resetOffsetClick, nextWeekClick } = props;

  return (
  <>
      <button onClick={previousWeekClick}>Föregående vecka</button>
      <button onClick={resetOffsetClick}>Nuvarande vecka</button>
      <button onClick={nextWeekClick}>Nästa vecka</button>
    </>
  )
}
