import React, { useState, useEffect, useLayoutEffect } from "react";
import Axios from "axios";
import Styled from 'styled-components';
import Title from "./Components/Title";
import Image from "./Components/Image";
import Caption from "./Components/Caption";
import DatePicker from "./Components/DatePicker";
import "./App.css";

function App() {
  const [nasaData, setNasaState] = useState({});
  const [imageDate, setImageDate] = useState(new Date().toISOString().split('T')[0])

  // const fakeAxiosData = {"copyright":"Leonardo Julio","date":"2019-12-12","explanation":"Bright stars, clouds of dust and glowing nebulae decorate this cosmic scene, a skyscape just north of Orion's belt. Close to the plane of our Milky Way galaxy, the wide field view spans about 5.5 degrees. Striking bluish M78, a reflection nebula, is on the right. M78's tint is due to dust preferentially reflecting the blue light of hot, young stars. In colorful contrast, the red sash of glowing hydrogen gas sweeping through the center is part of the region's faint but extensive emission nebula known as Barnard's Loop. At lower left, a dark dust cloud forms a prominent silhouette cataloged as LDN 1622. While M78 and the complex Barnard's Loop are some 1,500 light-years away, LDN 1622 is likely to be much closer, only about 500 light-years distant from our fair planet Earth.","hdurl":"https://apod.nasa.gov/apod/image/1912/m78ldn1622barnardsloopJulio.jpg","media_type":"image","service_version":"v1","title":"Decorating the Sky","url":"https://apod.nasa.gov/apod/image/1912/m78ldn1622barnardsloopJulio1100.jpg"};

  useEffect(() => {
    Axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + imageDate)
      .then(res => {
        if (res.data.media_type !== "image") {
          res.data.title = "No image for this date. Pick an earlier date.";
          res.data.url = "";
          res.data.explanation = "";
        }
        
        setNasaState(res.data);
      })
      .catch(e => {
        setNasaState({ title: "No image for this date. Pick an earlier date." });
      });
  }, [imageDate]);

  const dateChanged = (newDate) => {
    setNasaState({ title: "Loading..." });
    setImageDate(newDate.toISOString().split('T')[0]);
  };

  const DatePickerContainer = Styled.div`
    font-family: F1;
    font-size: 1.5rem;
    background-color: #71c9f8;
  `;

  return (
    <div className="App">
      <Title titleText={nasaData.title}/>
      <DatePickerContainer>
        <DatePicker dateChanged={dateChanged} currentDate={imageDate}/>
      </DatePickerContainer>
      <Image imageURL={nasaData.url}/>
      <Caption captionText={nasaData.explanation}/>
    </div>
  );
}

export default App;
