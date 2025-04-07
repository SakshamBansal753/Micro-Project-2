import React, { useState } from 'react'

const Signin = () => {
  const [reminders, setReminders] = useState([
    { email: '', medicine: '', time: '' }
  ])

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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-4xl transition duration-300">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">💊 Medicine Reminder</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {reminders.map((reminder, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-200">
              <input
                type="email"
                name="email"
                value={reminder.email}
                onChange={(e) => handleChange(index, e)}
                placeholder="Email"
                className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
              <input
                type="text"
                name="medicine"
                value={reminder.medicine}
                onChange={(e) => handleChange(index, e)}
                placeholder="Medicine Name"
                className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
              <input
                type="time"
                name="time"
                value={reminder.time}
                onChange={(e) => handleChange(index, e)}
                className="p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
            </div>
          ))}

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
            <button
              type="button"
              onClick={addReminder}
              className="w-full sm:w-auto bg-blue-500 text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-600 transition"
            >
              + Add Another
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto bg-green-500 text-white px-6 py-2 rounded-xl font-medium hover:bg-green-600 transition"
            >
              Submit Reminders
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin
