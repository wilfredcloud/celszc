import React from 'react'

const TestimonyCard = ({testifier}) =>  {
    const {id, name, text, avatar, church} = testifier;
   return (
        <div className=" border-t-4 border-t-blue-800 w-full  rounded-lg shadow-lg p-10">
            <div className=" flex flex-row space-x-4">
                <div className="">
                    <img src={avatar} alt={name} />
                </div>
                <div className=" flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-bold">{name}</h3>
                    <p className=" font-medium">{church}</p>
                </div>
            </div>

            <p className="text-lg md:text-xl mt-4">{text}</p>
        </div>
        )
}
export default TestimonyCard