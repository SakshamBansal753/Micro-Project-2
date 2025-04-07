import React, { useState } from 'react'
import Navbar from './navbar'
import Info from './Info'

const Signin = () => {
  const [reminders, setReminders] = useState([{ email: '', medicine: '', time: '' }])

  const handleChange = (index, e) => {
    const { name, value } = e.target
    const updated = [...reminders]
    updated[index][name] = value
    setReminders(updated)
  }

  const addReminder = () => {
    setReminders([...reminders, { email: '', medicine: '', time: '' }])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(reminders)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4 py-10">
      <div className='absolute top-0 left-0 right-0 z-50'>
        <Info/>
      </div>
      <div className='absolute top-23 left-0 right-0 z-50'>
      <Navbar />
      </div>
      

      <div className="flex justify-center items-start mt-50">
        <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-4xl p-10 animate-fade-in">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 tracking-tight">
            💊 Medicine Reminder
          </h1>

          <form onSubmit={handleSubmit} className="space-y-10">
            {reminders.map((reminder, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm transition hover:shadow-md duration-300"
              >
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={reminder.email}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="example@email.com"
                    className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-2">Medicine</label>
                  <input
                    type="text"
                    name="medicine"
                    value={reminder.medicine}
                    onChange={(e) => handleChange(index, e)}
                    placeholder="Paracetamol"
                    className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-2">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={reminder.time}
                    onChange={(e) => handleChange(index, e)}
                    className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    required
                  />
                </div>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
              <button
                type="button"
                onClick={addReminder}
                className="w-full sm:w-auto bg-blue-500 text-white px-6 py-3 rounded-2xl font-medium shadow-md hover:bg-blue-600 active:scale-95 transition-all duration-300"
              >
                + Add Reminder
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto bg-green-500 text-white px-8 py-3 rounded-2xl font-medium shadow-md hover:bg-green-600 active:scale-95 transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>
        {`
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out both;
          }
        `}
      </style>
    </div>
  )
}

export default Signin
