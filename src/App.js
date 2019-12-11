import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import Title from "./Components/Title";
import Image from "./Components/Image";
import Caption from "./Components/Caption";

function App() {
  const [nasaData, setNasaState] = useState({});

  useEffect(() => {
    Axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        if (res.data.media_type !== "image") {
          res.data.title = "NO IMAGE TODAY";
          res.data.url = "";
          res.data.explanation = "NO IMAGE TODAY";
        }

        setNasaState(res.data);
      });
  }, []);

  return (
    <div className="App">
       <Title titleText={nasaData.title}/>
       <Image imageURL={nasaData.url}/>
       <Caption captionText={nasaData.explanation}/>
    </div>
  );
}

export default App;
