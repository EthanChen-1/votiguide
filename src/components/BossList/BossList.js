import React from "react";
import BossListItem from "../BossListItem/BossListItem";
import "./BossList.css";

export default function BossList(props) {
  const bossList = props.bosses.map((boss, index) => {
    return (
      <BossListItem
        key={crypto.randomUUID()}
        name={boss.name}
        raidNumber={index}
        bossInfo={props.bossInfo}
        bossImage={boss.image}
      />
    );
  });
  return <ul className="boss-list">{bossList}</ul>;
}
