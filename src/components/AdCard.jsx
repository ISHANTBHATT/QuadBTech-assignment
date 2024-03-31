import React from 'react'
import img from '../assets/img6.jpg'
function AdCard() {
  return (
  <div>
  <div className="w-48 md:w-72 h-full mx-auto z-10 flex flex-col">
    <div className="bg-white dark:bg-[#3B3E47] relative shadow-md p-2 m-4">
      <div className="flex-none sm:flex">
        <div className="flex-auto justify-evenly">
          <div className="relative md:h-60 h-40">
            <img className="w-full h-full" src={img} alt="Advertisement" />
            <div className="absolute top-0 right-0 bg-black text-white px-4 py-1">
              <span>Ad</span>
            </div>
          </div>
          <div className="flex-col justify-center">
            <div className="flex flex-col py-2 justify-centerl items-center md:text-xl text-m">
              <h3 className="font-semibold dark:text-white">Advertisement title</h3>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col md:pl-4 pb-2 justify-center text-xs dark:text-[#DFDFDF]">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default AdCard