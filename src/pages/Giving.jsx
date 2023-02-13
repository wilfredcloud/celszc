import givingData from "../utils/givingData";

const Giving = () => {

    const givingComponents = givingData.map((givingComponent, index) => (
        <div key={index} className="w-[850px] h-[303px] rounded-[10px]
        bg-[#F0F4FA] p-8 mb-12 flex flex-col justify-around
        ">
            <h3 className="font-bold">{givingComponent.name}</h3>

            <p>{givingComponent.content}</p>

            <button className="bg-[#F78F2F] rounded p-[10px]
            w-[101px] h-[39px] mt-[10px]
            ">
            Give</button>
        </div>
    ));
    return (
    <div className="bg-blue-100 flex flex-col items-center justify-start  w-full">

        <div className="w-[1280px] h-[367px]
        bg-gradient-to-r from-[#6699F2] to-[#2FF7F74D]
        flex justify-center items-center"
        >
            <div className="w-fit h-fit">
            <h1 className="mb-4 text-[#0F61F0] text-[32px]
            font-semibold"
            >All we know is a life of giving</h1>
            <p className="text-[#F78F2F] font-normal
            tracking-wide bg-white rounded-full
            w-fit p-4"
            >ONLINE GIVING</p>
            </div>

         </div>

         <p className="mt-24 mb-[1rem] w-[488px]">Then Isaac sowed in that land, and reaped in the same land a hundredfold; and the lord blessed him.</p>
         <p className="text-[#0F61F0] mb-12">-   Gensis 26 vs 12</p>

        {givingComponents}
    </div>
    );

};

export default Giving;