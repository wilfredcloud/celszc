import rowImageMinstry from '../assets/info-row-img1.png'
import rowImageJoinCell from '../assets/info-row-img2.png'
import rowImagePartnerWithGod from '../assets/info-jumbo-3-partner.png'
import rowImagePrayerRequest from '../assets/info-jumbo-4-prayer.png'
import testifier1 from '../assets/testifier1.png'
import testifier2 from '../assets/testifier2.png'
import testifier3 from '../assets/testifier3.png'



export const OurMinistryRowData = {
    title: {
      content: "In Our Ministry, We Love And Trust God",
      class: "text-blue-800 ",
      fontFamily: 'Merriweather, serif'
    },
    text: "We are the fastest growing Subzonal Church in the Love World Nation. We are committed to raising global champions and leaders for the advancement of the gospel of our lord and Savior Jesus Christ.",
    image: rowImageMinstry,
    hr: {
        class: 'border-amber-200 '
    } ,
    button: {
        text: 'STATEMENT OF FAITH',
        class: `bg-amber-400 hover:bg-amber-300 focus-visible:outline-amber-400 `
    } 
  };
  

  export const joinACellRowData = {
    title: {
      content: "Join A Cell",
      class: "text-amber-400 ",
    },
    text: "A cell is a group of like-minded Christians of a similar age, profession, and martial status who meet to support your spiritual growth and development in Christ.",
    image: rowImageJoinCell,
    order: 'reserved',
   
    button: {
        text: 'Join Now',
        class: 'bg-blue-800  hover:bg-blue-700 focus-visible:outline-blue-800'
    } 
  };
  

  export const partnerWithGodRowData = {
    title: {
      content: "Partner With God",
      class: "text-blue-800",
    },
    text: "At christ Embassy, we believe we are called to spread the gospel to the ends of the earth. Through the support of our beloved partners, we have been able to spread the good news with the approach of the kingdom's requirements, it is necessary to fulfill the church's mandate on earth.",
    image: rowImagePartnerWithGod,
   
    button: {
        text: 'Get Involve',
        class: 'bg-amber-400 hover:bg-amber-300 focus-visible:outline-amber-400 '
    } 
  };
  

  export const prayerRequestRowData = {
    title: {
      content: "Prayer Request",
      class: "text-amber-400 ",
      fontFamily: 'Merriweather, serif'
    },
    text: "In our ministry we trust in the strength of God’s love. We will be glad and delighted to pray with you.",
    image: rowImagePrayerRequest,
    hr: {
        class: ' border-blue-200 '
    } ,
    button: {
        text: 'Prayer Request',
        class: `bg-blue-800 hover:bg-blue-700 focus-visible:outline-blue-400 `
    } 
  };


  export const testimoniesData = [
    {
      id: 1,
      name: "Marvin McKinney",
      text: "“Our church is nothing short of a warmth, lovely and supportive community”",
      avatar: testifier1,
      church: "CE Isheri",
    },
    {
      id: 2,
      name: "Arlene McCoy",
      text: "“Our church is nothing short of a warmth, lovely and supportive community”",
      avatar: testifier2,
      church: "CE Isheri",
    },
    {
      id: 3,
      name: "Savannah Nguyen",
      text: "“Our church is nothing short of a warmth, lovely and supportive community”",
      avatar: testifier3,
      church: "CE Isheri",
    },
  ];
  