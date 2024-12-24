import { useState } from 'react'
import { ReviewCard } from "@/components/ReviewCard"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const seedReviews = [
  {
    id: 1,
    userName: "Alice Johnson",
    avatarUrl: "/placeholder.svg?height=40&width=40",
    dateTime: "2023-05-15 14:30",
    courseName: "Introduction to Computer Science",
    professor: "Dr. Smith",
    year: 2,
    semester: 3,
    rating: 4,
    reviewText: "This course provided an excellent foundation in computer science. Dr. Smith's lectures were engaging and the assignments were challenging but rewarding. I particularly enjoyed the group project where we developed a small application. The only downside was the heavy workload, which sometimes felt overwhelming..."
  },
  {
    id: 2,
    userName: "Bob Williams",
    avatarUrl: "/placeholder.svg?height=40&width=40",
    dateTime: "2023-06-02 09:15",
    courseName: "Advanced Mathematics",
    professor: "Prof. Johnson",
    year: 3,
    semester: 5,
    rating: 5,
    reviewText: "Prof. Johnson's Advanced Mathematics course was truly exceptional. The curriculum covered a wide range of complex topics, but the professor's clear explanations and patience made even the most difficult concepts accessible. The weekly problem sets were challenging and really helped solidify our understanding..."
  },
  {
    id: 3,
    userName: "Charlie Brown",
    avatarUrl: "/placeholder.svg?height=40&width=40",
    dateTime: "2023-05-20 16:45",
    courseName: "World History",
    professor: "Dr. Garcia",
    year: 1,
    semester: 2,
    rating: 3,
    reviewText: "Dr. Garcia's World History course was informative but could use some improvements. While the content was comprehensive, covering major historical events and their impacts, the lecture style was sometimes dry and hard to follow. The assigned readings were interesting, but often felt disconnected from the lectures..."
  },
  {
    id: 4,
    userName: "Diana Martinez",
    avatarUrl: "/placeholder.svg?height=40&width=40",
    dateTime: "2023-06-10 11:20",
    courseName: "Organic Chemistry",
    professor: "Prof. Lee",
    year: 2,
    semester: 4,
    rating: 4,
    reviewText: "Organic Chemistry with Prof. Lee was a challenging but rewarding experience. The professor's enthusiasm for the subject was contagious, and the lab sessions were particularly enlightening. The course material was dense, but Prof. Lee provided excellent study resources and was always available during office hours..."
  },
  {
    id: 5,
    userName: "Ethan Taylor",
    avatarUrl: "/placeholder.svg?height=40&width=40",
    dateTime: "2023-05-28 13:10",
    courseName: "Introduction to Psychology",
    professor: "Dr. Patel",
    year: 1,
    semester: 1,
    rating: 5,
    reviewText: "Dr. Patel's Introduction to Psychology course was absolutely fascinating. The lectures were engaging, often incorporating real-world examples and interactive demonstrations. The course covered a wide range of topics, from cognitive processes to social psychology, providing a comprehensive overview of the field..."
  }
]

export default function ReviewsPage() {
  const [filter, setFilter] = useState('All')

  const filteredReviews = seedReviews.filter(review => 
    filter === 'All' || review.rating === parseInt(filter)
  )

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10">University Course Reviews</h1>
        <div className="mb-6">
          <Select onValueChange={setFilter} defaultValue="All">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by rating" />
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
        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}