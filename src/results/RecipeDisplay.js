import React from 'react'
import AppContext from '../AppContext'
import { useNavigate } from 'react-router'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

function RecipeDisplay() {
    const navigate = useNavigate()
    return (
        <AppContext.Consumer>
            {(value) => {
                if (!value.recipe.recipe.label) {
                    return null
                } else {
                    const calories = parseFloat(value.recipe.recipe.calories).toFixed(0)
                    const image = value.recipe.recipe.image
                    return (
                        <article className='dashboard_recipe'>
                            <h3 className='card_title'>{value.recipe.recipe.label}</h3>
                            <ul className='dashboard_recipe_image'>
                                <li><a href={value.recipe.recipe.url} target="_blank" rel="noreferrer">
                                        <img width="200" height="200" src={image} alt='food'/>
                                </a></li>
                            </ul>
                            <ul className='dashboard_recipe_info'>
                                <li>Total Time: {value.recipe.recipe.totalTime} min</li>
                                <li>Yields: {value.recipe.recipe.yield} servings</li>
                                <li>
                                    Recipe Instructions:  <a href={value.recipe.recipe.url} target="_blank" rel="noreferrer">
                                            <br/>{value.recipe.recipe.source}
                                        </a>
                                </li>
                            </ul>
                                <span className='button_space'><button className='rounded_button' type='button' onClick={() => {
                                    value.restartAll()
                                    navigate('/')
                                }}>Reset</button></span>
                                <Tippy content={
                                    <span>
                                        <li>Total Time: {value.recipe.recipe.totalTime} min</li>
                                        <li>Yields: {value.recipe.recipe.yield} servings</li>
                                        <li>Calories: {calories} kcal</li>
                                        <li>Meal Type: {value.recipe.recipe.mealType} - {value.recipe.recipe.dishType}</li>
                                        <li>Cuisine Type: {value.recipe.recipe.cuisineType}</li>
                                        <li>Diet Labels: {value.recipe.recipe.dietLabels}</li>
                                        <li>Cautions: {value.recipe.recipe.cautions}</li>
                                    </span>}>
                                    <span className='button_space'><button className='rounded_button'>Info</button></span>
                                </Tippy>
                            
                        </article>
                    )
                }
            }}
        </AppContext.Consumer>
    )
}

export default RecipeDisplay
