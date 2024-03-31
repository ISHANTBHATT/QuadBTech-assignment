import React from "react";

const Card = ({id,title,img,Number,sport}) => {
  return (
    <div>
        <div className="w-48 md:w-72  h-full mx-auto z-10 flex flex-col">
          <div className="bg-white relative shadow-md p-4 m-4 dark:bg-[#3B3E47]">
            <div className="flex-none sm:flex">
              <div className="flex-auto justify-evenly">
                <div className="h-48 md:h-72">
                    <img className="w-full h-full" src={img} />
                </div>
                <div className="flex-col justify-center">
                <div className="flex flex-col py-5  justify-center md:text-m text-sm">
                  <h3 className="font-semibold dark:text-white">{title}</h3>
                </div>

                <div className="flex-col md:flex md:flex-row bg-[#F7F7F8] py-2 px-4 justify-between dark:bg-[#292B32]">
                    <div className="flex-col  justify-center text-sm md:m-0 my-2">
                      <span className="dark:text-[#DFDFDF]">Total Events</span>
                      <span className="flex font-semibold items-center dark:text-white">{Number} Events</span>  
                    </div>
                    <div className="flex-col  justify-center text-sm pr-2 md:m-0 my-2">
                      <span className="dark:text-[#DFDFDF]">Sport</span>
                      <span className="flex font-semibold items-center dark:text-white">{sport}</span>  
                    </div>
                </div>
                
                </div>             
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Card;
