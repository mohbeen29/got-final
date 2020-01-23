import React from "react";
import Summary from "./Summary";

const Image = ({ data }) => {
  if (data.image) return <img src={data.image.medium} alt="" />;
  else return null;
};
//null means do not render anything.
export default Image;

/* <div style={{ border: "1px solid red" }}> {JSON.stringify(data.image)} </div> */
