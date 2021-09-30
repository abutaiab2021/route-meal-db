import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css'

const Restaurant = () => {
    const [seachText,setSearchText] = useState('');
    const [meals,setMeals] = useState([])

    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${seachText}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[seachText])
    const handleSeachField = e =>{
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }
    return (
        <div >
            <label className="search-label">Search Meals</label>
            <input className="seach-field" name="Search Meal" onChange={handleSeachField} placeholder="Search Meal Here" type="text" />
            <div className="meals-container">
                {
                    meals.map(meal =>  <Meal key={meals.idMeal} meal={meal}></Meal> )
                }
            </div>
        </div>
    );
};

export default Restaurant;