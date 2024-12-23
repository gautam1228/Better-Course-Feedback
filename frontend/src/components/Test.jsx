import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Text } from 'recharts';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

const professorReviews = [
    { name: "Dr. Smith", reviews: 120 },
    { name: "Prof. Johnson", reviews: 85 },
    { name: "Dr. Williams", reviews: 65 },
];

const COLORS = ["#ff7300", "#00C49F", "#FFBB28"]; // Example colors for the pie chart

const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } = props;
  
    return (
      <g>
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
    );
};

const ProfessorReviewsCard = () => {
    const [activeIndex, setActiveIndex] = useState(-1);
    
    const getReviewCount = () => {
        if (activeIndex === -1) return null; // No professor selected, don't show review count
        return professorReviews[activeIndex].reviews;
    };

    return (
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
                            defaultValue='all'
                        >
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

                    <div className="flex-grow h-[300px] relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={professorReviews}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    dataKey="reviews"
                                    activeIndex={activeIndex === -1 ? undefined : activeIndex}
                                    activeShape={renderActiveShape}
                                    className="outline-none"
                                >
                                    {professorReviews.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                {activeIndex !== -1 && (
                                    <Text
                                        x="50%"
                                        y="50%"
                                        textAnchor="middle"
                                        dominantBaseline="central"
                                        className="text-xl font-semibold text-black"
                                    >
                                        {getReviewCount()}
                                    </Text>
                                )}
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default function Test(){
  <ProfessorReviewsCard/>
}