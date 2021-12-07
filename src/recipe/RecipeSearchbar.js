import React from 'react'
import AppContext from '../AppContext'
function RecipeSearchbar() {
    return (
        <AppContext.Consumer>
            {(value) => {
                return (
                    <article className='recipe_searchbar'>
                        <form onSubmit={(e) => value.findRecipes(e)}>
                            <input 
                                type='text' required name='recipe' id='recipe' 
                                aria-label='recipe search term' placeholder='chicken'
                            />
                            <button type='submit'>
                                Search
                            </button>
                        </form>
                    </article>
                )
            }}
        </AppContext.Consumer>
    )
}

export default RecipeSearchbar
