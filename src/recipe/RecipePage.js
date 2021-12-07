import React from 'react'
import RecipeSearchbar from './RecipeSearchbar'
import RecipeList from './RecipeList'

function RecipePage() {
    return (
        <section className='recipe_page'>
            <RecipeSearchbar />
            <RecipeList />
        </section>
    )
}

export default RecipePage
