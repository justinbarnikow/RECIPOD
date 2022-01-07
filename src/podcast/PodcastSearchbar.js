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
                                placeholder='search for podcast..' required
                            />
                            <div className='podcast_buttons'>
                                <span className='button_space'><button disabled={!value.recipe.recipeTime} type='submit'>Search</button></span>
                                <span className='button_space'><button type='button' onClick={() => {
                                    value.restartAll()
                                    navigate('/')
                                }}>Reset</button></span>
                                <span className='button_space'><button onClick={() => {
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

export default PodcastSearchbar
