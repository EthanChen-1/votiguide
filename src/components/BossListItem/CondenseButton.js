import React from "react";

export default function CondenseButton(props) {
  const buttonClickHandler = () => {
    props.onClickCondenseButton(false);
  };
  return <button onClick={buttonClickHandler}>-</button>;
}
