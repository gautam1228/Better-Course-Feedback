import { useState } from 'react'
import { ReviewCard } from "@/components/ReviewCard"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

const reviews = [
  {
    id: 1,
    userName: "Alice Johnson",
    avatarUrl: "/placeholder.svg?height=40&width=40",
    dateTime: "2024-05-15 14:30",
    courseName: "Data Structures and Algorithms",
    professor: "Dr. Smith",
    year: 2024,
    semester: 3,
    rating: 4,
    reviewText: "This course provided an excellent foundation in computer science. Dr. Smith's lectures were engaging and the assignments were challenging but rewarding. I particularly enjoyed the group project where we developed a small application. The only downside was the heavy workload, which sometimes felt overwhelming..."
  },
  {
    id: 2,
    userName: "Bob Williams",
    avatarUrl: "/placeholder.svg?height=40&width=40",
    dateTime: "2023-06-02 09:15",
    courseName: "Digital Electronics",
    professor: "Dr. Johnson",
    year: 2023,
    semester: 5,
    rating: 5,
    reviewText: "Prof. Johnson's Digital Electronics course was truly exceptional. The curriculum covered a wide range of complex topics, but the professor's clear explanations and patience made even the most difficult concepts accessible. The weekly problem sets were challenging and really helped solidify our understanding..."
  },
  {
    id: 3,
    userName: "Charlie Brown",
    avatarUrl: "/placeholder.svg?height=40&width=40",
    dateTime: "2023-05-20 16:45",
    courseName: "Heat Transfer",
    professor: "Dr. Brown",
    year: 2023,
    semester: 2,
    rating: 3,
    reviewText: "Dr. Garcia's World History course was informative but could use some improvements. While the content was comprehensive, covering major historical events and their impacts, the lecture style was sometimes dry and hard to follow. The assigned readings were interesting, but often felt disconnected from the lectures..."
  },
  {
    id: 4,
    userName: "Diana Martinez",
    avatarUrl: "/placeholder.svg?height=40&width=40",
    dateTime: "2023-06-10 11:20",
    courseName: "Control Systems",
    professor: "Dr. Williams",
    year: 2022,
    semester: 4,
    rating: 4,
    reviewText: "Organic Chemistry with Prof. Lee was a challenging but rewarding experience. The professor's enthusiasm for the subject was contagious, and the lab sessions were particularly enlightening. The course material was dense, but Prof. Lee provided excellent study resources and was always available during office hours..."
  },
  {
    id: 5,
    userName: "Ethan Taylor",
    avatarUrl: "/placeholder.svg?height=40&width=40",
    dateTime: "2023-05-28 13:10",
    courseName: "Signals and Systems",
    professor: "Dr. Smith",
    year: 2020,
    semester: 1,
    rating: 5,
    reviewText: "Dr. Smith's Introduction to Psychology course was absolutely fascinating. The lectures were engaging, often incorporating real-world examples and interactive demonstrations. The course covered a wide range of topics, from cognitive processes to social psychology, providing a comprehensive overview of the field..."
  }
]

const professors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams', 'Dr. Brown', 'Dr. Jones'].sort()
const courses = [
  { department: 'CSE', courses: ['Data Structures and Algorithms', 'Database Systems', 'Operating Systems'] },
  { department: 'ECE', courses: ['Digital Electronics', 'Signals and Systems', 'Control Systems', 'VLSI Design'] },
  { department: 'ME', courses: ['Thermodynamics', 'Fluid Mechanics', 'Machine Design', 'Heat Transfer'] },
].sort((a, b) => a.department.localeCompare(b.department))

const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024].reverse()
const semesters = [1, 2, 3, 4, 5, 6, 7, 8]

const criteriaMapping = {
  gradingDifficulty: 'Grading Difficulty',
  academicWorkload: 'Academic Workload',
  teachingQuality: 'Teaching Quality',
  courseContent: 'Course Content',
  management: 'Management'
}

export default function ReviewsPage() {
  const [ratingFilter, setRatingFilter] = useState('All')
  const [professorFilter, setProfessorFilter] = useState('All')
  const [courseFilter, setCourseFilter] = useState('All')
  const [semFilter, setSemFilter] = useState('All')
  const [yearFilter, setYearFilter] = useState('All')

  const filteredReviews = reviews.filter(review => 
    (ratingFilter === 'All' || review.rating === parseInt(ratingFilter)) &&
    (professorFilter === 'All' || review.professor === professorFilter) &&
    (courseFilter === 'All' || review.courseName === courseFilter) &&
    (yearFilter === 'All' || review.year === parseInt(yearFilter)) &&
    (semFilter === 'All' || review.semester === parseInt(semFilter))
  )

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">University Course Reviews</h1>
        <div className="mb-6">
          <Label htmlFor="rating">Rating</Label>
          <Select onValueChange={setRatingFilter}
          defaultValue="All">
            <SelectTrigger className="w-[200px]" id="rating">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="1">1 star</SelectItem>
              <SelectItem value="2">2 stars</SelectItem>
              <SelectItem value="3">3 stars</SelectItem>
              <SelectItem value="4">4 stars</SelectItem>
              <SelectItem value="5">5 stars</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-6">
            <Label htmlFor="professor">Professor</Label>
            <Select onValueChange={setProfessorFilter}
            defaultValue="All">
              <SelectTrigger className="w-[300px]" id="professor">
                <SelectValue/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                {professors.map((professor) => (
                  <SelectItem key={professor} value={professor}>
                    {professor}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mb-6">
            <Label htmlFor="course">Course</Label>
            <Select onValueChange={setCourseFilter}
              defaultValue="All">
              <SelectTrigger className="w-[300px]" id="course">
                <SelectValue/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
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
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-6">
            <Label htmlFor="year">Year</Label>
            <Select onValueChange={setYearFilter}
              defaultValue='All'>
              <SelectTrigger className="w-[300px]" id="year">
                <SelectValue/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mb-6">
            <Label htmlFor="semester">Semester</Label>
            <Select onValueChange={setSemFilter}
              defaultValue="All">
              <SelectTrigger className="w-[300px]" id="semester">
                <SelectValue/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                {semesters.map((semester) => (
                  <SelectItem key={semester} value={semester}>
                    Semester {semester}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}