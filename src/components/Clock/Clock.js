import React, { useEffect, useState } from "react";
import "./clock.css";

function Clock() {
  const [colck, setColck] = useState();

  useEffect(() => {
    function myTimer() {
      var Time = new Date();
      setColck(Time.toLocaleTimeString());
    }
    setInterval(myTimer, 1000);
  }, []);

  return (
    <div >
      <h1 >{colck}</h1>
    </div>
  );
}

export default Clock;
