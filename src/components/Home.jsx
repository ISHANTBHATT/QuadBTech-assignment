import React from 'react'
import CardCarousel from "./Carousel";
import { data2 } from './data';
import Card from './Card2';
import AdCard from './AdCard';
function Home() {
  return (
    <div className=''>

        <div className='flex justify-center'>
          <div className='flex flex-col  justify-center '>
          <a className='font-semibold text-2xl p-4 md:flex md:justify-start flex justify-center'>
                <span className='border-b-4 border-b-[#738FFF] dark:text-white'>Sports</span>
           </a>
          <div className='flex flex-wrap justify-center'>
          {data2.map((item)=>(
                <Card id={item.id} title={item.title} img={item.img} Number={item.Number} sport={item.sport}/>
            ))}
            <AdCard />
          </div>
          <div className='flex justify-center py-6'>
          <button class="bg-[#2C9CF0] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              See More
          </button>
          </div>

          </div>          
        </div>
        

             
    <div className="m-20 p-10 bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF] dark:bg-gradient-to-b dark:from-[#18282A] dark:to-[#221A2C]">
    <div className='flex flex-col justify-center items-center '>
            <h1 className='font-bold text-4xl items-center p-6 dark:text-white'>Collection Spotlight</h1>
                <h3 className=' py-6 md:px-40 text-center dark:text-white'>
                    Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
                </h3>
        </div>
    <CardCarousel />
  </div>
</div>
  )
}

export default Home