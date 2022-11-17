/** @format */

import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [file, setFile] = useState();

  async function handleChange(e) {
    // console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    // console.log("image", URL.createObjectURL(e.target.files[0]));
  }
  async function colorChange(e) {
    document.body.style.backgroundColor = e.target.value;
  }
  function ChangeFilter() {
    const image = document.getElementById("Image");
    const Filter = document.getElementById("Filter").value;

    // console.log(Filter);

    // Image.style.WebkitFilter =Filter * 10 + "%";
    image.style.WebkitFilter = "grayscale(" + Filter * 10 + "%)";
    //  console.log(image.style.WebkitFilter);
  }

  return (
    <div>
      <div>
        <input className="ps" type={"file"} onChange={handleChange}></input>
      </div>
      <img id="Image" src={file} alt={""} className="box" />
      <a href="tel:+254713563798">Call Me</a>
      <input type={"color"} onChange={colorChange} />
      <input
        type={"range"}
        id="Filter"
        name="points"
        min={0}
        max={10}
        onChange={ChangeFilter}
      />
    </div>
  );
};

export default App;
