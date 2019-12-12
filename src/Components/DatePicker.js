import React, { useLayoutEffect } from "react";
import JSDatePicker from "js-datepicker";

const DatePicker = ({ dateChanged, currentDate }) => {
  useLayoutEffect(() => {
    JSDatePicker("span.datePicker", {
      onSelect: (instance, date) => {
        dateChanged(date);
      },
      maxDate: new Date()
    });
  }, []);

  return (
    <span className="datePicker" style={{cursor: "pointer"}}>{currentDate}</span>
  );
}

export default DatePicker;