import React from "react";

export default function BossInfo(props) {
  const info = props.information[props.index];
  const attackList = info.attacks.map((attack) => {
    return <p key={crypto.randomUUID()}>{attack}</p>;
  });
  return <div>{attackList}</div>;
}
