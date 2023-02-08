import React from 'react'
import rightQuote from '../assets/right-quote.png'
import leftQuote from '../assets/left-quote.png'

const Salvation = () => {
  return (
    <div className=" my-20 py-20 bg-slate-200">
      <div className="container mx-auto px-4 ">
    <h1
      style={{ fontFamily: "Merriweather, serif" }}
      className="text-center text-4xl lg:text-5xl font-bold text-blue-800 px-4 ">
      Not Born Again?
    </h1>
    <div className=" text-center max-w-3xl mx-auto">

        <p className="text-lg md:text-xl mt-4 " >Say these words</p>
        <p className=" my-5 text-xl   mx-auto font-medium"> 
        <img src={leftQuote} alt="Left Quotation Mark" className=" inline mr-3" />
        O LORD GOD, I believe with all my heart in Jesus christ,
           Son of the living God. I believe He died for me and God raised Him from the dead. 
           I believe he’s alive today. I confess with my mouth that Jesus Christ is Lord
            of my life from this day. Through Him and His Name, I have eternal life; 
            I’m born again. Thank you Lord, for saving my soul! I’m now a child of God.
             Hallelujah! <img src={rightQuote} alt="Right Quotation Mark" className="ml-3 inline" /></p>
           
            <h3 className=" italic text-lg my-4 font-semibold   text-amber-500">Congratulations!</h3>

            <p className=" italic text-lg  ">You are now a child of God. To receive more information on how you will grow as a Christain <br />
            please fill out your details:</p>
            </div>


        <div>
        {/* <input type="email" class="form-input px-4 py-3 rounded-full"/> */}
        </div>
            </div>
    </div>
  )
}

export default Salvation