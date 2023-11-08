import React, { useState } from "react";

const WithLoader = (Component) => {
  const [loaded, setLoaded] = useState(false);
  setTimeout(() => setLoaded(true), 2000);
  return (props) => {
    return loaded ? <Component {...props} /> : "Loading";
  };
};

export default WithLoader;
