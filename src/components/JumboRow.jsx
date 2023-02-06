import React from 'react'

const JumboRow = ({data, handleClick}) => (
    <div className=" container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 my-20 px-4 ">
        <div className={`${data?.order == 'reserved' ? 'lg:order-2' : ''}`}>
            {data?.hr && <hr className={`${data?.hr?.class}`}/>}
            <h1 style={{ fontFamily: data?.title?.fontFamily }} className={`text-3xl md:text-4xl font-[900] ${data?.title.class}`}>{data.title.content}</h1>
            <p className=" text-lg md:text-xl mt-4 leading-8 md:leading-10">{data.text}</p>
           {data?.button &&  <button onClick={handleClick} className={`rounded-md  p-2.5 md:p-3.5 text-base font-semibold leading-7 text-white shadow-sm 
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  uppercase mt-3 ${data?.button?.class}`}>{data?.button?.text}</button>}
        </div>
        <div className={`${data?.order == 'reserved'? 'lg:order-1' : ''}`}>
            <img src={data.image} alt="Worshipper" />
        </div>
    </div>
  )

export default JumboRow