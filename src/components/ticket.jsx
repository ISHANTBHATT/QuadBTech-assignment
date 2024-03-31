import React from "react";

const ticket = ({id,title,img,location,date,button}) => {
  return (
    <div class="flex flex-col items-center justify-center min-h-screen bg-center bg-cover">
  <div class="absolute opacity-80 inset-0 z-0"></div>
  <div class="max-w-72 w-full h-full mx-auto z-10 flex flex-col">
    <div class="bg-white relative shadow-md p-4 m-4 dark:bg-[#3b3e47]">
      <div class="flex-none sm:flex">
        <div class="flex-auto justify-evenly">
          <div class="flex items-center my-1 justify-center">
            <img class="max-w-full h-auto" src={img} alt="Image" />
          </div>
          <div class="border-b-[3px] border-dashed my-5 pt-5 dark:border-[#818A97]">
            <div class="absolute rounded-full w-5 h-5 bg-[#F7F8FF] z-0 -mt-2 -left-2 dark:bg-[#1c1b27]"></div>
            <div class="absolute rounded-full w-5 h-5 bg-[#F7F8FF] -mt-2 -right-2 dark:bg-[#1c1b27]"></div>
          </div>
          <div class="flex-col justify-center">
            <div class="flex flex-col py-5 justify-center md:text-m text-sm">
              <h3 class="font-bold text-center dark:text-white">{title}</h3>
            </div>
            <div class="flex justify-center md:px-5 px-0 md:text-sm text-xs">
              <span class="flex font-semibold dark:text-[#DFDFDF]">{date}</span>
            </div>
            <div class="flex justify-center px-0 pt-3 text-xs md:px-5">
              <span class="flex md:text-center text-gray-500 dark:text-[#DFDFDF]">{location}</span>
            </div>
            <div class="flex items-center md:px-5 my-2 justify-center">
              <button class="bg-black hover:bg-gray-400 w-full text-white py-2 px-4 inline-flex justify-center">
                <span class="md:text-sm text-xs">{button}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default ticket;
