import React from 'react'
import AppContext from '../AppContext'
import { useNavigate } from 'react-router-dom'

function RecipeCard(props) {
    const navigate = useNavigate()
    const calories = parseFloat(props.recipe.recipe.calories).toFixed(0)
    const image = props.recipe.recipe.image
    return (
        <AppContext.Consumer>
            {(value) => {
                return (
                    <div className='recipe_card'>
                        {props.recipe.recipe.label}
                        <ul className='recipe-info'>
                            <li>Total Time: {props.recipe.recipe.totalTime} min</li>
                            <li>Yields: {props.recipe.recipe.yield} servings</li>
                            <li>Calories: {calories} kcal</li>
                            <li>
                                Recipe Instructions:  <a href={props.recipe.recipe.url} target="_blank" rel="noreferrer">
                                        {props.recipe.recipe.source}
                                    </a>
                            </li>
                            <li><a href={props.recipe.recipe.url} target="_blank" rel="noreferrer">
                                <img width="150" height="150" src={image} alt='food'/>
                            </a></li>
                            <li>Type: {props.recipe.recipe.mealType} - {props.recipe.recipe.dishType}</li>
                            <li>Diet labels: {props.recipe.recipe.dietLabels}</li>
                            <button 
                                type='button' onClick={() => {
                                    value.setRecipe(props.recipe)
                                    navigate('/podcast')
                                }}>
                                    Select
                            </button>
                        </ul>
                    </div>
                )
            }}
        </AppContext.Consumer>
    )
}

export default RecipeCard
