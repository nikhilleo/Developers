import React from "react";
import axios from "../../axios";

function Index() {
  var base64Flag = "data:image/jpeg;base64,";
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const url = e.target[0].value;
    const base64 = btoa(url);
    const decoded = atob(base64);
    console.log(base64);
    console.log(decoded);
    axios
      .post(
        `https://api.imgbb.com/1/upload?expiration=600&key=8e1a5ee3d30f2e8af9d9287346ba347e --form image=${base64}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="owner__Create__Camps">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" />
        <button type="submit">upload</button>
      </form>
    </div>
  );
}

export default Index;
