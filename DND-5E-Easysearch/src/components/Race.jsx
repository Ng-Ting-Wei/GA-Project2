import React from "react";
import styles from "./Styles.module.css";

const Race = (props) => {
  const handleRaceName = () => {
    // Call the updateRaceName function when the button is clicked
    props.updateRaceName(props.nameR, props.indexR);
  };

  return (
    <div>
      <button className={`${styles.race}`} onClick={handleRaceName}>
        {props.nameR}
      </button>
    </div>
  );
};

export default Race;
