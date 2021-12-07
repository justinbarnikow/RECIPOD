import React from 'react'
import AppContext from '../AppContext'

function PodcastSearchbar() {
    return (
        <AppContext.Consumer>
            {(value) => {
                return (
                    <article className='podcast_searchbar'>
                        <form onSubmit={(e) => value.findPodcasts(e)}>
                            <input 
                                type='text' name='podcast' id='podcast' aria-label='podcast search term'
                                placeholder='college football' required
                            />
                            <button type='submit' disabled={!value.recipe.recipeTime}>
                                Search
                            </button>
                        </form>
                    </article>
                )
            }}
        </AppContext.Consumer>
    )
}

export default PodcastSearchbar
