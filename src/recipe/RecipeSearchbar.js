import React from 'react'
import AppContext from '../AppContext'
import { useNavigate } from 'react-router'

function RecipeSearchbar() {
    const navigate = useNavigate()
    return (
        <AppContext.Consumer>
            {(value) => {
                return (
                    <article className='recipe_searchbar'>
                        <form onSubmit={(e) => value.findRecipes(e)}>
                            <input 
                                type='text' required name='recipe' id='recipe' 
                                aria-label='recipe search term' placeholder='search for recipe..'
                            />
                            <div className='recipe_buttons'>
                                <span className='button_space'><button className='rounded_button' type='submit'>Search</button></span>
                                <span className='button_space'><button className='rounded_button' type='button' onClick={() => {
                                    value.restartAll()
                                }}>Reset</button></span>
                                <span className='button_space'><button className='rounded_button' onClick={() => {
                                    navigate('/help')
                                }}>Help</button></span>
                            </div>
                        </form>
                    </article>
                )
            }}
        </AppContext.Consumer>
    )
}

export default RecipeSearchbar
