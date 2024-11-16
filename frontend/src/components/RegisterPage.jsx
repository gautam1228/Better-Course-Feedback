import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    branch: '',
  })
  const [error, setError] = useState('')

  const branches = [{name: 'Computer Science and Applied Mathematics', code: 'CSAM'},
                    {name: 'Computer Science and Artificial Intelligence', code: 'CSAI'},
                    {name: 'Computer Science and Biosciences', code: 'CSB'},
                    {name: 'Computer Science and Design', code: 'CSD'},
                    {name: 'Computer Science and Engineering', code: 'CSE'},
                    {name: 'Computer Science and Social Sciences', code: 'CSSS'},
                    {name: 'Electronics and Communications Engineering', code: 'ECE'},
                    {name: 'Electronics and VLSI Engineering', code: 'EVE'}]

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
    
    console.log('Form submitted:', formData)
    navigate('/')
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className=" text-center text-3xl font-extrabold text-gray-900 mb-4">Sign Up</h2>
        <p className="text-gray-600 mb-6">Please fill in your details to create an account.</p>
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
              <Label htmlFor="branches">Branches</Label>
              <Select onValueChange={(value) => 
                setFormData((prevState) => ({
                  ...prevState,
                  ['branch']: value,
              }))}>
                <SelectTrigger id="branch">
                  <SelectValue placeholder="Select your branch" className='text-gray-400'/>
                </SelectTrigger>
                <SelectContent>
                  {branches.map((branch) => (
                    <SelectItem key={branch.name} value={branch.code}>
                      {`${branch.name} (${branch.code})`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                Sign Up
              </button>
            </div>
        </form>        
      </div>
    </div>
  )
}