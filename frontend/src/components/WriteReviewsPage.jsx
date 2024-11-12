import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';

export default function WriteReviews(){
    const [course, setCourse] = useState('');
    const [professor, setProfessor] = useState('');
    const [year, setYear] = useState('');
    const [semester, setSemester] = React.useState(0);
    const [review, setReview] = useState('');
    const [rating, setRating] = React.useState(0);
    const [hoverRating, setHoverRating] = React.useState(-1);
  
    return(
        <div>
        <h2>Write a review!</h2>
        <form onSubmit={(event) =>{event.preventDefault();}}> 
            <Autocomplete
                required
                options={courses.sort((a, b) => a.code.substring(0, 3).localeCompare(b.code.substring(0, 3)))}
                groupBy={(option) => option.code.substring(0, 3)}
                getOptionLabel={(option) => option.title}
                onChange={(event, val) => {setCourse(val); console.log(val);}}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Select course" />}
            />
            <br />

            <Autocomplete
                required
                options={professors.sort((a, b) => a.name[0].localeCompare(b.name[0]))}
                getOptionLabel={(option) => option.name}
                onChange={(event, val) => {setProfessor(val); console.log(val);}}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Select professor" />}
            />
            <br />

            <FormControl required sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="year-input">Year</InputLabel>
                <Select
                    required
                    labelId="year-label"
                    id="year"
                    value={year}
                    label="Year *"
                    onChange={(event) =>{setYear(event.target.value); console.log(event.target.value)}}
                    >
                    <MenuItem value= ''>
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={2017}>2017</MenuItem>
                    <MenuItem value={2018}>2018</MenuItem>
                    <MenuItem value={2019}>2019</MenuItem>
                    <MenuItem value={2020}>2020</MenuItem>
                    <MenuItem value={2021}>2021</MenuItem>
                    <MenuItem value={2023}>2023</MenuItem>
                    <MenuItem value={2024}>2024</MenuItem>
                </Select>
            </FormControl>
            <br />

            <h3>Enter Semester</h3>
            <Slider
                required
                size= "small"
                aria-label="semester"
                defaultValue={1}
                step={1}
                valueLabelDisplay="auto"
                min={1}
                max={8}
                onChange={(event, val) => {setSemester(val); console.log(val);}}
                sx={{
                    width: 250,
                    height: 5
                }}
            />
            <br />

            <TextField 
                required
                id="review" 
                label="Review" 
                variant="outlined"
                type= 'text' 
                placeholder='Post a review...' 
                value= {review} 
                onChange={(event) =>{setReview(event.target.value); console.log(event.target.value)}}
                sx={{
                    width: 500, 
                }}
                multiline
                rows={4}
                inputProps={{
                    style: {
                        height: '10px',  
                        padding: '10px',
                    }
                }}
            />
            <br />
            <br />
            <Rating
                required
                name="hover-feedback"
                value={rating}
                onChange={(event, newRating) => {setRating(newRating); console.log(newRating)}}
                onChangeActive={(event, newHoverRating) => {setHoverRating(newHoverRating); console.log(newHoverRating)}}
                emptyIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
                // getLabelText={(value) => {
                //     return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
                //   }}
            />
            <br />
            <br />

            <Button variant="contained" type='submit'>Submit Review!</Button>
            <br />
        </form>
        </div>
    );
};

const courses = 
[
    { code: 'CSE102', title: 'Data Structures and Algorithms' },
    { code: 'CSE231', title: 'Operating Systems' },
    { code: 'CSE201', title: 'Advanced Programming' },
    { code: 'ECE250', title: 'Signals and Systems' },
    { code: 'ECE111', title: 'Digital Circuits' },
    { code: 'MTH210', title: 'Discrete Structures' },
    { code: 'MTH377', title: 'Convex Optimization' },
    { code: 'ECO223', title: 'Money and Banking' },
];

const professors = 
[
    { name: 'Pankaj Jalote'},
    { name: 'Tammam Tillo'},
    { name: 'Rajiv Ratan'},
    { name: 'Payal Mukherji'},
    { name: 'Piyush Kedia'},
    { name: 'Sanjit Kaul'},
    { name: 'Jainendra Shukla'},
    { name: 'Kiriti Kanjilal'},
    { name: 'Sujay Deb'},
    { name: 'Koteswar Rao Jerripothula'},
    { name: 'Dhruv Kumar'},
    { name: 'Rajiv Raman'},
    { name: 'Satish Kumar Pandey'},
    { name: 'Anubha Gupta'},
    { name: 'Ashish Kumar Pandey'},
    { name: 'A V Subramanyam'},
    { name: 'Mukesh Mohania'},
    { name: 'Diptapriyo Majumdar'},
    { name: 'Ruhi Sonal'},
    { name: 'Supratim Shit'},
    { name: 'Saket Anand'},
    { name: 'Pushpendra Singh'},
    { name: 'Vinayak Abrol'},
    { name: 'Anuj Grover'}
]

// const labels = {
//     1: 'Avoid Completely',
//     2: 'Needs Improvement',
//     3: 'Decent Option',
//     4: 'Worth Considering',
//     5: 'Highly Recommended',
// };
// NOTE: NOT WORKING PROPERLY