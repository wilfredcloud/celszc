import React from "react";
import { Hero, JumboRow } from "../components";
import {
  OurMinistryRowData,
  joinACellRowData,
  partnerWithGodRowData,
} from "../utils/data";

const handleJoinCell = () => {
  console.log("Join cell");
};

const handleStatementOfFaith = () => {
  console.log("Our statement of faith");
};
const Home = () => {
  return (
    <div>
      <Hero />
      <JumboRow
        data={OurMinistryRowData}
        handleClick={handleStatementOfFaith}
      />

      <div className=" my-20 py-20 bg-slate-200">
          <h1
            style={{ fontFamily: "Merriweather, serif" }}
            className="text-center text-5xl font-bold text-amber-500 "
          >
            Get Involve In Our Movement
          </h1>
          <JumboRow data={joinACellRowData} handleClick={handleJoinCell} />
        <JumboRow data={partnerWithGodRowData} handleClick={handleJoinCell} />
       
      </div>
    </div>
  );
};

export default Home;
