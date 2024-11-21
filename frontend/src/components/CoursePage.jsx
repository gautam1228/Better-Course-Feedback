import { Star, User, Check, ChevronsUpDown } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const courseDetails = {
  name: "DATA STRUCTURES AND ALGORITHMS",
  acronym: "DSA",
  code: "CSE102",
  semester: "Winter",
}

const reviews = [
  { id: 1, author: "John D.", rating: 4, comment: "Great course, very informative!" },
  { id: 2, author: "Sarah M.", rating: 5, comment: "Excellent teaching, highly recommended." },
  { id: 3, author: "Mike R.", rating: 3, comment: "Good content, but heavy workload." }
]

const ratings = {
    easiness: 3.8,
    workload: 4.2,
    teachingQuality: 4.5,
    courseMaterial: 4.0,
    management: 3.9
}

const professorReviews = [
    { name: "Dr. Smith", reviews: 120 },
    { name: "Prof. Johnson", reviews: 85 },
    { name: "Dr. Williams", reviews: 65 }
]


const distributions = {
    1: 23,
    2: 45,
    3: 140,
    4: 196,
    5: 350
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

const totalRatings = (distribution) =>{
    return Object.values(distribution).reduce((sum, count) => sum + count, 0)
}

const averageRating = (distribution) =>{
    const totalScore = Object.entries(distribution).reduce(
        (sum, [rating, count]) => sum + Number(rating) * count, 0
    )
    const total = totalRatings(distribution);
    const average = total > 0 ? totalScore / total : 0;
    return average;
}
 
const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    return (
        <div className="flex">
        {[...Array(5)].map((_, i) => (
            <Star
            key={i}
            className={`w-6 h-6 ${
                i < fullStars
                ? "text-yellow-400 fill-yellow-400"
                : i === fullStars && hasHalfStar
                ? "text-yellow-400 fill-yellow-400 [clip-path:inset(0_50%_0_0)]"
                : "text-gray-300"
            }`}
            />
        ))}
        </div>
    )
}

const ProgressBar = ({ value }) => {
    return(
        <div className="h-4 w-full bg-gray-200 overflow-hidden">
            <div
                className="h-full bg-yellow-400"
                style={{ width: `${value}%` }}
            />
        </div>
  );
}

const RatingDistributionCard = ({distribution, parameter}) =>{
    const total = totalRatings(distribution);
    const average = averageRating(distribution);
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle> {parameter} </CardTitle>
                <p className="text-sm text-muted-foreground">{total} total ratings</p>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                    <div className="flex-1 space-y-3 mb-4 md:mb-0">
                        {Object.entries(distribution)
                        .sort(([a], [b]) => Number(b) - Number(a))
                        .map(([rating, count]) => (
                            <div key={rating} className="flex items-center">
                            <span className="w-16 text-sm text-right mr-2">{rating} star{Number(rating) !== 1 ? 's' : ''}</span>
                            <ProgressBar value={total > 0 ? (count / total) * 100 : 0} />
                            <span className="w-12 text-sm text-left ml-2">
                                {total > 0 ? Math.round((count / total) * 100) : 0}%
                            </span>
                            </div>
                        ))}
                    </div>
                    <div className="text-center md:w-32">
                        <div className="text-6xl font-bold mb-2">{average.toFixed(1)}</div>
                        <StarRating rating={average} />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}


export default function CoursePage() {
  return (
    <div className="container mx-auto p-4 space-y-8 bg-blue-50">
        <Card>
            <CardHeader>
            <CardTitle className="text-4xl">{courseDetails.name}</CardTitle>
            <CardDescription className="text-2xl text-gray-800">
                Acronym: {courseDetails.acronym} <br></br>
                Course Code: {courseDetails.code} <br></br>
                Semester: {courseDetails.semester} <br></br>
            </CardDescription>
            </CardHeader>
        </Card>

        <Card>
            <CardHeader>
            <CardTitle>Course Ratings</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {Object.entries(ratings).map(([key, value]) => (
                    <div key={key} className="flex flex-col items-center">
                        <h3 className="text-lg font-semibold capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                                key={index}
                                className={`w-5 h-5 ${
                                index < (value)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                            />
                            ))}
                            <span className="ml-2 text-xl font-bold">{value.toFixed(1)}</span>
                        </div>
                    </div>
                ))}
            </CardContent>

        </Card>
        
        <RatingDistributionCard distribution = {distributions} parameter={"Grading Difficulty"}/>  
        <RatingDistributionCard distribution = {distributions} parameter={"Academic Workload"}/>  
        <RatingDistributionCard distribution = {distributions} parameter={"Teaching Quality"}/>  
        <RatingDistributionCard distribution = {distributions} parameter={"Course Management"}/>
        <RatingDistributionCard distribution = {distributions} parameter={"Course Material"}/>  

        <Card>
            <CardHeader>
            <CardTitle>Professor Reviews</CardTitle>
            </CardHeader>
            <CardContent>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                <Pie
                    data={professorReviews}
                    dataKey="reviews"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                >
                    {professorReviews.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
                </PieChart>
            </ResponsiveContainer>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
            <CardTitle>Student Reviews</CardTitle>
            </CardHeader>
            <CardContent>
            <ul className="space-y-4">
                {reviews.map((review) => (
                <li key={review.id} className="border-b pb-4">
                    <div className="flex items-center mb-2">
                    <Avatar className="h-10 w-10">
                        <AvatarFallback>
                        <User className="h-6 w-6" />
                        </AvatarFallback>
                    </Avatar>
                    <div className="ml-4">
                        <p className="font-semibold">{review.author}</p>
                        <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star
                            key={i}
                            className={`w-4 h-4 ${
                                i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                            />
                        ))}
                        </div>
                    </div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                </li>
                ))}
            </ul>
            <br></br>
            <div className="flex space-x-4">
                <button
                    className="w-40 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                    Read all Reviews
                </button>

                <button
                    className="w-40 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                    Write a review
                </button>
            </div>
            </CardContent>
        </Card>
    </div>
  )
}