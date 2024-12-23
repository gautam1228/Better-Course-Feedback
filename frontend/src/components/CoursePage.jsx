import React, { useState } from 'react'
import { Star, User, Check, ChevronsUpDown } from 'lucide-react'
import { ResponsiveContainer, PieChart, Pie, Cell, Sector, Text } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useNavigate } from 'react-router-dom';

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

const professorReviews = [
    { name: "Dr. Smith", reviews: 120 },
    { name: "Prof. Johnson", reviews: 85 },
    { name: "Dr. Williams", reviews: 65 }
]


const distributions = {
    "Grading Difficulty": {
        5: 10,
        4: 18,
        3: 15,
        2: 5,
        1: 2,
    },
    "Academic Workload": {
        5: 8,
        4: 16,
        3: 19,
        2: 4,
        1: 3,
    },
    "Teaching Quality": {
        5: 12,
        4: 22,
        3: 18,
        2: 6,
        1: 4,
    },
    "Course Content": {
        5: 15,
        4: 25,
        3: 10,
        2: 7,
        1: 3,
    },
    "Management": {
        5: 20,
        4: 30,
        3: 10,
        2: 5,
        1: 1,
    },
};

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
    const fullStars = Math.floor(Math.round(rating * 10) / 10)
    const hasHalfStar = (Math.round(rating * 10) / 10) % 1 >= 0.5

    return (
        <div className="flex">
        {[...Array(5)].map((_, i) => (
            <div key={i} className="relative w-6 h-6">

            <Star className="absolute top-0 left-0 w-full h-full text-gray-200 fill-gray-200"  style={{ strokeWidth: 1.2 }} />

            {i < fullStars && (
                <Star className="absolute top-0 left-0 w-full h-full text-yellow-400 fill-yellow-400" style={{ strokeWidth: 1.2 }}/>
            )}

            {i === fullStars && hasHalfStar && (
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <Star className="w-full h-full text-yellow-400 fill-yellow-400 [clip-path:inset(0_50%_0_0)]" style={{ strokeWidth: 1.2 }}/>
                </div>
            )}
            </div>
        ))}
        </div>
    );
}

const ProgressBar = ({ value }) => {
    return(
        <div className="h-4 w-80 bg-gray-200 overflow-hidden">
            <div
                className="h-full bg-yellow-400"
                style={{ width: `${value}%` }}
            />
        </div>
  );
}

const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" verticalAnchor='middle' className='text-2xl font-bold' fill='gray'>
            {payload.reviews} reviews
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 10}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    )
}

const ProfessorReviewsCard = () =>{

    const [activeIndex, setActiveIndex] = useState(-1)  

    const getReviewCount = () => {
        if (activeIndex === -1) return null;
        console.log(professorReviews[activeIndex].reviews);
        return professorReviews[activeIndex].reviews;
    };

    return(
        <Card>
            <CardHeader>
                <CardTitle>Professor Reviews</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                    <div className="flex-shrink-0 w-full md:w-auto mb-4 md:mb-0">
                        <Select 
                        onValueChange={(value) => {
                            if (value === "all") {
                                setActiveIndex(-1);
                            } else {
                                const index = professorReviews.findIndex((prof) => prof.name === value);
                                setActiveIndex(index);
                            }
                        }}
                        
                        defaultValue='all'>
                            <SelectTrigger id="professor">
                                <SelectValue placeholder="Select a professor" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Professors</SelectItem>
                                {professorReviews.map((professor) => (
                                    <SelectItem key={professor.name} value={professor.name}>
                                        {professor.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>


                    <div className="flex-grow h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                            data={professorReviews}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={100}
                            dataKey="reviews"
                            activeIndex={activeIndex === -1 ? undefined : activeIndex}
                            activeShape={renderActiveShape}
                            className="outline-none"
                            >
                            {professorReviews.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            </Pie>
                        </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

const RatingDistributionCard = () =>{

    const [selectedCriteria, setSelectedCriteria] = useState(
        Object.keys(distributions)[0]
    );

    
    const selectedDistribution = distributions[selectedCriteria];
    const total = totalRatings(selectedDistribution);
    const average = averageRating(selectedDistribution);

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle> {selectedCriteria} </CardTitle>
                <p className="text-sm text-muted-foreground">{total} total ratings</p>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
                    <div className="flex-1 space-y-3 mb-4 md:mb-0">
                        {Object.keys(distributions).map((parameter) => (
                            <div key={parameter}>
                                <button
                                    onClick={() => setSelectedCriteria(parameter)}
                                    className={`py-2 px-4 rounded transition-all duration-300 ${
                                        parameter === selectedCriteria
                                            ? "text-black font-semibold text-xl"
                                            : "text-gray-500 text-sm hover:text-gray-700 hover:text-lg"
                                    }`}
                                >
                                    {parameter}
                                </button>
                            </div>
                        ))}
                    </div>


                    <div className="flex-1 space-y-3">
                        {Object.entries(selectedDistribution)
                            .sort(([a], [b]) => Number(b) - Number(a))
                            .map(([rating, count]) => (
                                <div key={rating} className="flex items-center">
                                    <span className="w-16 text-sm text-right mr-2">
                                        {rating}
                                    </span>
                                    <ProgressBar value={total > 0 ? (count / total) * 100 : 0} />
                                    {/* <span className="w-12 text-sm text-left ml-2">
                                        {total > 0 ? Math.round((count / total) * 100) : 0}%
                                    </span> */}
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
    const navigate = useNavigate();

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
                {Object.entries(distributions).map(([key, value]) => (
                    <div key={key} className="flex flex-col items-center">
                        <h3 className="text-lg font-semibold capitalize">
                            {key}
                        </h3>
                        <div className="flex items-center">
                            <StarRating rating={averageRating(value)}/>
                            <span className="ml-2 text-xl font-bold">{averageRating(value).toFixed(1)}</span>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
        
        <RatingDistributionCard/>  

        <ProfessorReviewsCard/>

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
                    onClick={() => {navigate('/writeReviews')}}
                >
                    Write a review
                </button>
            </div>
            </CardContent>
        </Card>
    </div>
  )
}