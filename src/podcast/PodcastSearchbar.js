import React from 'react'
import { useNavigate } from 'react-router'
import AppContext from '../AppContext'

function PodcastSearchbar() {
    const navigate = useNavigate()
    return (
        <AppContext.Consumer>
            {(value) => {
                return (
                    <article className='podcast_searchbar'>
                        <form onSubmit={(e) => value.findPodcasts(e)}>
                            <input 
                                type='text' name='podcast' id='podcast' aria-label='podcast search term'
                                placeholder='college football' required
                            /><br />
                            <button disabled={!value.recipe.recipeTime} type='submit'>Go</button>
                            <button onClick={() => {
                                navigate('/help')
                            }}>Help</button>
                            <button type='button' onClick={() => {
                                value.restartAll()
                                navigate('/')
                            }}>Restart</button>
                        </form>
                    </article>
                )
            }}
        </AppContext.Consumer>
    )
}

export default PodcastSearchbar
