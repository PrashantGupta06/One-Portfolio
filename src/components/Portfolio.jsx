import React from "react";
import img1 from "../assets/portfolio/img1.png";
import img2 from "../assets/portfolio/img2.png";
import img3 from "../assets/portfolio/img3.png";
import img4 from "../assets/portfolio/img4.png";

const Porfolio = () => {

    const portfolios = [
      {
        id: 1,
        src: img3,
        link: "https://insortt.netlify.app/",
        text: " INSORT_CLONE ",
      },
      {
        id: 2,
        src: img1,
        link: "https://drum-party.netlify.app/",
        text: " DRUM_KIT ",
      },
      
      {
        id: 3,
        src: img2,
        link: "https://luckydraww.netlify.app/",
        text: "LUCKY_DRAW",
        
      },
      {
        id:4,
        src: img4,
        link: "https://github.com/PrashantGupta06/Traffic_sign_recognition_System",
        text: " Traffic_Sign_Recognition"
      },
     
    ];


  return (
    <div
      name="portfolio"
      className="bg-gradient-to-r from-slate-900 to-slate-700 w-full
     text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
      w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my Work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link,text }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button>
                 
                </button>
                <text className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> <a href={link} rel="noreferrer" target="_blank" >{text}</a></text>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Porfolio;
