import React from 'react'
import { Hero, JumboRow } from "../components"
import { OurMinistryRowData, joinACellRowData} from "../utils/data"
 
const handleJoinCell = () => {
  console.log("Join cell");
}

const handleStatementOfFaith = () => {
  console.log("Our statement of faith");
}
const Home = () => {
  return (
    <div >
      <Hero/>
      <JumboRow data={OurMinistryRowData} handleClick={handleStatementOfFaith}/>

      <JumboRow data={joinACellRowData} handleClick={handleJoinCell}/>

    </div>
  )
}

export default Home