import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative"> 
      <img
        src="https://medisafe.com/wp-content/uploads/2021/12/home-hero-bg.jpg"
        className="w-full"
        alt="Background"
      />
      <div className='absolute top-[38%] left-[40px] text-5xl font-bold text-white '>
        Trusted Care for a Healthier Tomorrow.
      </div>
      <div className='absolute top-[48%] left-[70px] text-white'>
        "Remembering to take medications isn’t easy as we grow older.<br />
        But we deliver the best solution to help you stay on track with your medication.<br />
        Stay healthy, stay reminded!"
        
        <div className='mt-[50px]'>
          <button className='text-black rounded-2xl bg-[#0cb8b6] p-2 text-2xl'>Learn More</button>
          <Link to="/signin">  
            <button className='text-black rounded-2xl bg-[#0cb8b6] p-2 ml-[20px] text-2xl'>Sign In</button>
          </Link>
        </div>
      </div>
      <div className="absolute top-[50%] right-[-120px] transform -translate-x-1/2 -translate-y-1/2 z-10">
        <img
          src="/doctor.PNG"
          className="w-[540px] h-full drop-shadow-[0_0_40px_rgba(0,0,0,4)]"
          alt="Doctor"
        />
      </div>
    </div>
  );
};

export default Hero;
