import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function WriteReviews(){
    const {id} = useParams();

    return(
        <div>
        <h2>Write a review!</h2>
        <h3>{id}</h3>
        </div>
    );
};