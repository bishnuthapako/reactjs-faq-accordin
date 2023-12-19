import React from "react";
import FaqSection from "./FaqSection";
import backgroundimg from "../src/images/background-pattern-mobile.svg"

const App = () => {
  console.log(backgroundimg, 'img')
 
  return (
    <div className="flex justify-center mt-[100px]">
      <div className="w-full h-[250px] absolute top-0 -z-50 bg-no-repeat bg-cover" style={{backgroundImage: `url(${backgroundimg})`}}>
        
      </div>
      <div className="bg-slate-200 w-[600px] h-auto rounded-md shadow-lg m-5 md:m-1">
        <div className="mt-4 px-4 font-extrabold text-2xl flex gap-3">
          <div className=" text-pink-600">
            <ion-icon name="star"></ion-icon>
          </div>
          <div>
            <p>FAQs</p>
          </div>
        </div>
        <div className=" pb-5">
          <FaqSection />
        </div>
      </div>
    </div>
  );
};

export default App;
