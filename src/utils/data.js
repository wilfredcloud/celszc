import rowImageMinstry from '../assets/info-row-img1.png'
import rowImageCell from '../assets/info-row-img2.png'

export const OurMinistryRowData = {
    title: {
      content: "In Our Ministry, We Love And Trust God",
      class: "text-blue-800 ",
      fontFamily: 'Merriweather, serif'
    },
    text: "We are the fastest growing Subzonal Church in the Love World Nation. We are committed to raising global champions and leaders for the advancement of the gospel of our lord and Savior Jesus Christ.",
    image: rowImageMinstry,
    hr: {
        class: ' w-32 md:w-40 mb-6 border-2 md:border-4 border-amber-200 '
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
    image: rowImageCell,
    order: 'reserved',
   
    button: {
        text: 'Join Now',
        class: 'bg-blue-800  hover:bg-blue-700 focus-visible:outline-blue-800'
    } 
  };
  