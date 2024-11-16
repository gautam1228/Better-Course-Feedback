import { useState } from 'react'
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useNavigate } from 'react-router-dom';

// Mock data for professors and courses
const professors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams', 'Dr. Brown', 'Dr. Jones'].sort()
const courses = [
  { department: 'CSE', courses: ['Data Structures and Algorithms', 'Database Systems', 'Operating Systems'] },
  { department: 'ECE', courses: ['Digital Electronics', 'Signals and Systems', 'Control Systems', 'VLSI Design'] },
  { department: 'ME', courses: ['Thermodynamics', 'Fluid Mechanics', 'Machine Design', 'Heat Transfer'] },
].sort((a, b) => a.department.localeCompare(b.department))

const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024].reverse()
const semesters = [1, 2, 3, 4, 5, 6, 7, 8]

export default function Component() {
  const navigate = useNavigate();
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({
    professor: '',
    course: '',
    year: '',
    semester: '',
    rating: '',
    review: ''
  })

  const handleChange = (value, fieldName) => {
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };
  

  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle form submission here
    console.log('Form submitted', formData)
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Write a Review</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="professor">Professor</Label>
              <Select onValueChange={(value) => {handleChange(value, 'professor')}}>
                <SelectTrigger id="professor">
                  <SelectValue placeholder="Select a professor"/>
                </SelectTrigger>
                <SelectContent>
                  {professors.map((professor) => (
                    <SelectItem key={professor} value={professor}>
                      {professor}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="course">Course</Label>
              <Select onValueChange={(value) => {handleChange(value, 'course')}}>
                <SelectTrigger id="course">
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map((dept) => (
                    <SelectGroup key={dept.department}>
                      <SelectLabel>{dept.department}</SelectLabel>
                      {dept.courses.sort().map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="year">Year</Label>
                <Select onValueChange={(value) => {handleChange(value, 'year')}}>
                  <SelectTrigger id="year">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="semester">Semester</Label>
                <Select onValueChange={(value) => {handleChange(value, 'semester')}}>
                  <SelectTrigger id="semester">
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                  <SelectContent>
                    {semesters.map((semester) => (
                      <SelectItem key={semester} value={semester.toString()}>
                        Semester {semester}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
                <Label htmlFor="rating">Rating</Label>
                <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`w-8 h-8 cursor-pointer transition-all duration-200 transform ${
                        star <= (hoverRating || formData.rating)
                            ? 'text-yellow-400 fill-yellow-400 scale-110'
                            : 'text-gray-300'
                        } hover:scale-125`}
                        onClick={() => setFormData(prevState => ({
                          ...prevState,
                          ['rating']: star
                        }))}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                    />
                    ))}
                </div>
            </div>

            <div>
              <Label htmlFor="review">Review</Label>
              <Textarea
                id="review"
                placeholder="Write your review here..."
                className="mt-1"
                rows={5}
              />
            </div>
          <Button type="submit" className="w-full">Submit Review</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}