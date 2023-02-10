import React from 'react'
import { footerData } from "../utils/data"

const Footer = () => {
    const { ourChurch, ministryStore,
        quickLink, serviceTime,
        contactUs, address } = footerData;
    return (
        <div className="my-20">
            <div className=" container mx-auto px-4 mb-10 flex flex-col md:flex-row md:space-x-6">
                <div className="w-full md:w-2/6">
                    <div > <img src={ourChurch.logo} alt="Logo" />
                        <p className=" text-gray-700 text-lg my-3">{ourChurch.about}</p>
                    </div>

                </div>
                <div className="w-full md:w-4/6
                    grid grid-cols-1 md:grid-cols-2
                        lg:grid-cols-4  md:gap-3">
                    <div>
                        <h3 className=" font-medium text-gray-800 mt-5 md:mt-0 mb-3
                        text-xl">Ministry Store</h3>
                        <ul>
                            {ministryStore.map((item, index) => (
                                <li className="py-2 text-gray-700" key={index}>{item.title}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className=" font-medium text-gray-800 mt-5 md:mt-0 mb-3
                        text-xl">Quick Link</h3>
                        <ul>
                            {quickLink.map((item, index) => (
                                <li className="py-2 text-gray-700" key={index}>{item.title}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className=" font-medium text-gray-800 mt-5 md:mt-0 mb-3
                        text-xl"> Service Time</h3>
                        <ul>
                            <li className="py-2 text-gray-700" >{serviceTime.sunday}</li>
                            <li className="py-2 text-gray-700">{serviceTime.wednesday}</li>
                        </ul>

                    </div>
                    <div>
                        <h3 className=" font-medium text-gray-800 mt-5 md:mt-0 mb-3
                        text-xl">Address</h3>
                        <ul>
                            <li className="py-2 text-gray-700 leading-8">{address}</li>
                        </ul>
                    </div>

                </div>



            </div>

            <div className="container mx-auto ">
                <hr />

                <p className=" text-sm text-gray-700 text-center mt-10">&copy; Christ Embassy Lagos Sub Zone C. All rights reserved
                </p>
            </div>


        </div>
    )
}

export default Footer