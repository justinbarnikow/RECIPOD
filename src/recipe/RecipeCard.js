import React from 'react'
import AppContext from '../AppContext'
import { useNavigate } from 'react-router-dom'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional


function RecipeCard(props) {
    const navigate = useNavigate()
    const calories = parseFloat(props.recipe.recipe.calories).toFixed(0)
    const image = props.recipe.recipe.image
    return (
        <AppContext.Consumer>
            {(value) => {
                console.log(value)
                return (
                    <div className='recipe_card'>
                        <h3 className='card_title'>{props.recipe.recipe.label}</h3>
                        <ul className='recipe_image'>
                            <li><a href={props.recipe.recipe.url} target="_blank" rel="noreferrer">
                                <img width="200" height="200" src={image} alt='food'/>
                            </a></li>
                        </ul>
                        <ul className='recipe_info'>
                            <li>Total Time: {props.recipe.recipe.totalTime} min</li>
                            <li>Yields: {props.recipe.recipe.yield} servings</li>
                            <li>
                                Recipe Instructions:  <a href={props.recipe.recipe.url} target="_blank" rel="noreferrer">
                                        <br/>{props.recipe.recipe.source}
                                    </a>
                            </li>
                        </ul>
                        <span className='button_space'><button className='rounded_button'
                            type='button' onClick={() => {
                            value.setRecipe(props.recipe)
                            navigate('/podcast')
                        }}>
                            Select
                        </button></span>
                        <Tippy content={
                            <span>
                                <li>Total Time: {props.recipe.recipe.totalTime} min</li>
                                <li>Yields: {props.recipe.recipe.yield} servings</li>
                                <li>Calories: {calories} kcal</li>
                                <li>Meal Type: {props.recipe.recipe.mealType} - {props.recipe.recipe.dishType}</li>
                                <li>Cuisine Type: {props.recipe.recipe.cuisineType}</li>
                                <li>Diet Labels: {props.recipe.recipe.dietLabels}</li>
                                <li>Cautions: {props.recipe.recipe.cautions}</li>
                            </span>}>
                            <span className='button_space'><button className='rounded_button'>Info</button></span>
                        </Tippy>
                    </div>
                )
            }}
        </AppContext.Consumer>
    )
}

export default RecipeCard