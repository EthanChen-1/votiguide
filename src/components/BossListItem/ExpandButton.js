import React from "react";

export default function ExpandButton(props) {
  const buttonClickHandler = () => {
    props.onClickExpandButton(true);
  };
  return (
    <button onClick={buttonClickHandler} style={{ height: "2em" }}>
      +
    </button>
  );
}
