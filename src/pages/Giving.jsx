import givingData from "../utils/givingData";

const Giving = () => {

    const givingComponents = givingData.map((givingComponent, index) => (
        <div key={index} className="max-w-[850px] w-full min-h-[303px] h-fit rounded-[10px]
        bg-[#F0F4FA] p-8 mb-12 flex flex-col justify-around"
        >
            <h3 className="font-bold">{givingComponent.name}</h3>

            <p className="font-extralight leading-9">{givingComponent.content}</p>

            <button className="bg-[#F78F2F] rounded p-[10px]
            w-[101px] h-[39px] mt-[10px]"
            >Give</button>
        </div>
    ));

    return (
    <div className="bg-blue-100 flex flex-col items-center justify-start  w-full">

        <div className="max-w-[1280px] w-full h-[367px]
        bg-gradient-to-r from-[#6699F2] to-[#2FF7F74D]
        flex justify-center items-center"
        >
            <div className="w-fit h-fit">
            <h1 className="mb-4 text-[#0F61F0] text-[16px] sm:text-[20px] lg:text-[32px]
            font-semibold"
            >ALL WE KNOW IS A LIFE OF GIVING</h1>
            <p className="text-[#F78F2F] font-normal
            tracking-wide bg-white rounded-full
            w-fit p-4 text-[12px] sm:text-[18px]"
            >ONLINE GIVING</p>
            </div>

         </div>

         <p className="mt-24 mb-[1rem] w-[250px] sm:w-[280px] lg:w-[488px]
         "
         >Then Isaac sowed in that land, and reaped in the same land a hundredfold; and the lord blessed him.</p>
         <p className="text-[#0F61F0] mb-12">-   Gensis 26 vs 12</p>

        {givingComponents}

        <h1 className="font-semibold text-[21px] sm:text-[28px] lg:text-[32px] w-fit border-[#EB8527]
        border-b-2 pb-4"
        >Other Partnership Arms</h1>
        <div className="font-semibold text-[14px] sm:text-[18px] w-max-[1280px] w-full flex flex-col
        justify-start items-center my-[3rem] lg:my-[6rem] lg:flex-row lg:justify-around "
        >
            <p>C.E SUBZONE C YOUTH MINISTRY</p>
            <p className="mt-[24px]">INNERCITY MISSION</p>
        </div>
    </div>
    );

};

export default Giving;