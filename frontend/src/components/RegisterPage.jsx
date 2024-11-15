import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    branch: '',
  })

  const [isFocused, setIsFocused] = useState(false);  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Connect to backend
    console.log('Form submitted:', formData)
    navigate('/')

  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className=" text-center text-3xl font-extrabold text-gray-900 mb-4">Register</h2>
        <p className="text-gray-600 mb-6">Please fill in your details to register.</p>
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder='Enter your full name'
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black-500 focus:border-black-500 sm:text-sm"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder='Enter your IIITD email address'
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black-500 focus:border-black-500 sm:text-sm"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder='Enter your password'
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black-500 focus:border-black-500 sm:text-sm"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="branch" className="block text-sm font-medium text-gray-700">
                Branch
              </label>
              <div className="mt-1">
                <select
                  id="branch"
                  name="branch"
                  placeholder= ""
                  required
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black-500 focus:border-black-500 sm:text-sm"
                  value={formData.branch}
                  onChange={handleChange}
                  >

                  <option value="" disabled className="text-gray-400 opacity-50">
                    Select your branch
                  </option>

                  <option value="CSAM">Computer Science and Applied Mathematics (CSAM)</option>
                  <option value="CSAI">Computer Science and Artificial Intelligence (CSAI)</option>
                  <option value="CSB">Computer Science and Biosciences (CSB)</option>
                  <option value="CSD">Computer Science and Design (CSD)</option>
                  <option value="CSE">Computer Science and Engineering (CSE)</option>
                  <option value="CSSS">Computer Science and Social Sciences (CSSS)</option>
                  <option value="ECE">Electronics and Communications Engineering (ECE)</option>
                  <option value="EVE">Electronics and VLSI Engineering (EVE)</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Register
              </button>
            </div>
        </form>        
      </div>
    </div>
  )
}