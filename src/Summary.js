import React from "react";

const Summary = ({ data }) => {
  if (data.summary)
    return (
      <p> Summary: {data.summary.replace(/<p>/g, "").replace(/<\/p>/g, "")} </p>
    );
  else return null;
};

export default Summary;

//line 6 to replace all the p tags in the Summary. we use .replace , what we want to replace, g means select all and "" is the replacement. first half is the opening tags and last is closing.
