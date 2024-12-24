import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from 'lucide-react'

export function ReviewCard({ review }) {
  const { userName, avatarUrl, dateTime, courseName, professor, year, semester, rating, reviewText } = review

  return (
    <Card className="w-full cursor-pointer hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={avatarUrl} alt={userName} />
          <AvatarFallback>{userName.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg">{userName}</CardTitle>
          <p className="text-sm text-muted-foreground">{dateTime}</p>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold mb-1">{courseName}</h3>
        <p className="text-sm text-muted-foreground mb-2">
          Professor: {professor} | Year: {year}, Semester: {semester}
        </p>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`}
            />
          ))}
        </div>
        <p className="text-sm line-clamp-4">{reviewText}</p>
      </CardContent>
    </Card>
  )
}