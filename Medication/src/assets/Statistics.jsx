import React from 'react'

const Statistics = () => {
  return (
    <div className='mt-[660px]'>
        <div className='bg-[#14457b] h-[500px] flex'>
          <div>
            <img src='./oldman.PNG'/>
          </div>
          <div>
            <h1 className='text-white text-5xl ml-[185px] mt-[120px] font-bold'>
            Insights: When Patients are <br></br>Most Likely to Skip Doses:
            </h1>
            <p className='text-white  ml-[185px] mt-7 text-1xl'>Fridays and Saturdays are the toughest  adherence days of the week<br></br> reported by people who use Medisafe. Medisafe's Just-In-Time-Interventions<br></br> technology enables targeted, personalized interventions to improve adherence and persistence.
            <p> <button className=' text-white bg-[#0cb8b6] px-[10px] py-[16px] mt-[30px] rounded-3xl text-2xl ' >
              <a href="https://www.medisafe.com/data-insights/">Visit Our insights</a>
              
            </button></p></p>
          </div>
        </div>
    </div>
  )
}

export default Statistics