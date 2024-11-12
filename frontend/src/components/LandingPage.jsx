import React, { useState, useEffect } from 'react'
import { BookOpen, Search, Star, ThumbsUp, Users, ChevronLeft, ChevronRight } from "lucide-react"

const LandingPage = () => {
  const reviews = [
    { id: 1, course: "Introduction to Computer Science", rating: 4.5, text: "Great introductory course! The professor was very engaging.", author: "Alice S." },
    { id: 2, course: "Organic Chemistry", rating: 4.0, text: "Challenging but rewarding. Lots of practical lab work.", author: "Bob M." },
    { id: 3, course: "World History", rating: 4.8, text: "Fascinating content and excellent discussions. Highly recommended!", author: "Charlie D." },
    { id: 4, course: "Calculus II", rating: 3.5, text: "Tough material, but the TA sessions were very helpful.", author: "Diana L." },
    { id: 5, course: "Introduction to Psychology", rating: 5.0, text: "Mind-blowing lectures and interesting experiments. Loved it!", author: "Eva R." },
  ]

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 5000) // Change review every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const handlePreviousReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a href="#" className="flex items-center justify-center">
          <BookOpen className="h-6 w-6" />
          <span className="sr-only">CourseReview</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a href="/register" className="text-sm font-medium hover:underline underline-offset-4">
            Register
          </a>
          <a href="/login" className="text-sm font-medium hover:underline underline-offset-4">
            Login
          </a>
          <a href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </a>
          <a href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Discover Your Perfect Courses
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl ">
                  CourseReview helps you make informed decisions about your education. Read and share honest reviews from fellow students.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                    placeholder="Search for a course..."
                    type="text"
                  />
                  <button
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-gray-800 text-white"
                    type="submit"
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 ">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Why Choose Us ?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Users className="h-8 w-8 mb-2 opacity-75" />
                <h3 className="text-xl font-bold">Student-Driven</h3>
                <p className="text-sm text-gray-500 ">
                  Real reviews from real students. Get the inside scoop on courses.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Star className="h-8 w-8 mb-2 opacity-75" />
                <h3 className="text-xl font-bold">Comprehensive Ratings</h3>
                <p className="text-sm text-gray-500 ">
                  Detailed ratings on multiple aspects of each course.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <ThumbsUp className="h-8 w-8 mb-2 opacity-75" />
                <h3 className="text-xl font-bold">Make Better Choices</h3>
                <p className="text-sm text-gray-500 text-center">
                  Choose courses that align with your learning style and goals.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              What Students Are Saying
            </h2>
            <div className="flex justify-center">
              <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg">
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-gray-300 w-12 h-12" />
                      <div>
                        <h3 className="text-lg font-semibold">{reviews[currentReviewIndex].course}</h3>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(reviews[currentReviewIndex].rating)
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                          <span className="ml-2 text-sm text-gray-600">{reviews[currentReviewIndex].rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 ">{reviews[currentReviewIndex].text}</p>
                    <p className="text-sm text-gray-500">- {reviews[currentReviewIndex].author}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-6 space-x-4">
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
                onClick={handlePreviousReview}
                aria-label="Previous review"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex space-x-2">
                {reviews.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full ${
                      index === currentReviewIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
                onClick={handleNextReview}
                aria-label="Next review"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 ">© 2024 CourseReview. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </a>
          <a href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}

export default LandingPage
