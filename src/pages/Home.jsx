import React from "react";
import { Hero, JumboRow, ServiceExperience } from "../components";
import {
  OurMinistryRowData,
  joinACellRowData,
  partnerWithGodRowData,
  prayerRequestRowData
} from "../utils/data";

const handleJoinCell = () => {
  console.log("Join cell");
};

const handleStatementOfFaith = () => {
  console.log("Our statement of faith");
};

const handleGetInvolve = () => {
  console.log("Get Involve");
};

const handlePrayerRequest = () => {
  console.log("Prayer request");
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
            className="text-center text-4xl lg:text-5xl font-bold text-amber-500 px-4  "
          >
            Get Involve In Our Movement
          </h1>
          <JumboRow data={joinACellRowData} handleClick={handleJoinCell} />
        <JumboRow data={partnerWithGodRowData} handleClick={handleGetInvolve} />
      </div>
      <JumboRow data={prayerRequestRowData} handleClick={handlePrayerRequest} />
      
      <ServiceExperience />
    </div>
  );
};

export default Home;
