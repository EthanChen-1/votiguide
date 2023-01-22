import React from "react";
import BossList from "./components/BossList/BossList";
import "./App.css";

const boss = require("./bosses.json");
const bosses = boss.bosses;
const bossInfo = boss.bossinfo;
export default function App() {
  return (
    <div className="app-style">
      <h1>
        Vault of the Incarnates
        <br /> Raid Guide
      </h1>
      <BossList bosses={bosses} bossInfo={bossInfo} />
      <p>Created by @EthanChen-1</p>
      <p>All Image Credits go to Wowhead.com</p>
    </div>
  );
}
