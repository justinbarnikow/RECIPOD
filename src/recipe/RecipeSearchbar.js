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
                                aria-label='recipe search term' placeholder='chicken'
                            /><br />
                            <button type='submit'>Go</button>
                            <button onClick={() => {
                                navigate('/help')
                            }}>Help</button>
                            <button type='button' onClick={() => {
                                value.restartAll()
                            }}>Restart</button>
                        </form>
                    </article>
                )
            }}
        </AppContext.Consumer>
    )
}

export default RecipeSearchbar
