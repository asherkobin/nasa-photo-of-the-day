import React, { useState, useEffect, useLayoutEffect } from "react";
import Axios from "axios";
import DatePicker from "js-datepicker";
import "./App.css";
import Title from "./Components/Title";
import Image from "./Components/Image";
import Caption from "./Components/Caption";

function App() {
  const [nasaData, setNasaState] = useState({});
  const [imageDate, setImageDate] = useState(new Date().toISOString().split('T')[0])

  useLayoutEffect(() => {
    DatePicker("input.datePicker", {
      onSelect: (instance, date) => {
        setNasaState({ title: "Loading..." });
        setImageDate(date.toISOString().split('T')[0]);
      },
      maxDate: new Date()
    });
  }, []);

  useEffect(() => {
    Axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + imageDate)
      .then(res => {
        if (res.data.media_type !== "image") {
          res.data.title = "Loading...";
          res.data.url = "";
          res.data.explanation = "";
        }

        setNasaState(res.data);
      })
      .catch(e => {
        setNasaState({ title: "No image for this date. Pick an earlier date." });
      });
  }, [imageDate]);

  return (
    <div className="App">
      <div>Select Date: <input type="text" readOnly="readOnly" defaultValue={imageDate} className="datePicker"/></div>
      <Title titleText={nasaData.title}/>
      <Image imageURL={nasaData.url}/>
      <Caption captionText={nasaData.explanation}/>
    </div>
  );
}

export default App;
