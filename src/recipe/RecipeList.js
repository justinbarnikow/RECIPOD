import React from 'react'
import AppContext from '../AppContext'
import RecipeCard from './RecipeCard'

function RecipeList() {
    return (
        <AppContext.Consumer>
            {(value) => {
                if(!value.recipe.list[0]) {
                    return 'No recipe selected yet. Search anything, and pick your favorite!'
                }
                return (
                    <article>
                        <ul>
                            {value.recipe.list.map((recipe, i) => {
                                return (
                                    <li key={i}><RecipeCard recipe={recipe} key={i} /></li>
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
