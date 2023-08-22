import Luxury from './images/icon-luxury.svg'
import Sedans from './images/icon-sedans.svg'
import Suv from './images/icon-suvs.svg'
import './app.css'

function App() {
  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div className="max-w-[700px] flex md:flex-col mt-10 mb-10 md:max-w-[300px] sm:max-w-[250px]">
        <div className='bg-[#f7990e] rounded-s-xl md:rounded-t-lg md:rounded-none'>
          <div className="p-8">
            <img src={Sedans} alt="#" className='w-[50px]'/>
            <h1 className='mt-5 mb-5 text-white text-2xl font-semibold'>SEDANS</h1>
            <p className='text-[#f5f4f4] text-sm'>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
            or on your next road trip.</p>
            <button className='mt-10 p-3 pl-5 pr-5 bg-white rounded-3xl text-[#f7990e] hover:bg-[#f7990e] hover:border-2 hover:border-white hover:text-[#fff]'>Learn More</button>
          </div>
        </div>
        
        <div className='bg-[#208eaf]'>
          <div className="p-8">
            <img src={Suv} alt="#" className='w-[50px]'/>
            <h1 className='mt-5 mb-5 text-white text-2xl font-semibold'>SUVs</h1>
            <p className='text-[#f5f4f4] text-sm'>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
            and off-road adventures.</p>
            <button className='mt-10 p-3 pl-5 pr-5 bg-white rounded-3xl text-[#208eaf] hover:bg-[#208eaf] hover:border-2 hover:border-white hover:text-[#fff]'>Learn More</button>
          </div>
        </div>
        
        <div className='bg-[#155c72] rounded-r-xl md:rounded-b-lg md:rounded-none'>
          <div className="p-8">
            <img src={Luxury} alt="#" className='w-[50px]'/>
            <h1 className='mt-5 mb-5 text-white text-2xl font-semibold'>LUXURY</h1>
            <p className='text-[#f5f4f4] text-sm'>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
            rental and arrive in style.</p>
            <button className='mt-10 p-3 pl-5 pr-5 bg-white rounded-3xl text-[#155c72] hover:bg-[#155c72] hover:border-2 hover:border-white hover:text-[#fff]'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
