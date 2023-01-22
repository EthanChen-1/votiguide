import React, { useState } from "react";
import "./BossListItem.css";
import Card from "../UI/Card";
import ExpandButton from "./ExpandButton";
import CondenseButton from "./CondenseButton";
import BossInfo from "../BossInfo/BossInfo";

export default function BossListItem(props) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <li
      className="boss-list-item-background"
      style={{ backgroundImage: `url(${props.bossImage})` }}
    >
      <Card className="boss-list-item">
        <h2 className="boss-list-item__name">{props.name}</h2>
        {isClicked && (
          <BossInfo information={props.bossInfo} index={props.raidNumber} />
        )}
        {!isClicked && <ExpandButton onClickExpandButton={setIsClicked} />}
        {isClicked && <CondenseButton onClickCondenseButton={setIsClicked} />}
      </Card>
    </li>
  );
}
