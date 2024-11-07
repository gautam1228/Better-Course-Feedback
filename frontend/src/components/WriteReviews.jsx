import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function WriteReviews(){

    const options = courses.map((option) => {
        const dept = option.code.substring(0, 3);
        return {
            dept, ...option
        };
    });

    return(
        <div>
        <h2>Write a review!</h2>

        <Autocomplete
        options={options.sort((a, b) => -b.dept.localeCompare(a.dept))}
        groupBy={(option) => option.dept}
        getOptionLabel={(option) => option.title}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="With categories" />}
        />

        </div>
    );
};

const courses = [{ code: 'CSE102', title: 'Data Structures and Algorithms' },
    { code: 'CSE231', title: 'Operating Systems' },
    { code: 'CSE201', title: 'Advanced Programming' },
    { code: 'ECE250', title: 'Signals and Systems' },
    { code: 'ECE111', title: 'Digital Circuits' },
    { code: 'MTH210', title: 'Discrete Structures' },
    { code: 'MTH377', title: 'Convex Optimization' },
    { code: 'ECO223', title: 'Money and Banking' },
];
