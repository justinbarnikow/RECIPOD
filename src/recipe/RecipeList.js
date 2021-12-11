import React from 'react'
import AppContext from '../AppContext'
import RecipeCard from './RecipeCard'

function RecipeList() {
    return (
        <AppContext.Consumer>
            {(value) => {
                if(!value.recipe.list[0]) {
                    //returns null or message if there is no recipe array
                    return null
                }
                return (
                    <article className='recipe_article'>
                        <ul className='recipe_list grid_list'>
                            {value.recipe.list.map((recipe, i) => {
                                return (
                                    <li className='grid_item' key={i}><RecipeCard recipe={recipe} key={i} /></li>
                                )
                            })}
                        </ul>
                    </article>
                )
            }}
        </AppContext.Consumer>
    )
}

export default RecipeList
