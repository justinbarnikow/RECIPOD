import React from 'react'
import AppContext from '../AppContext'
import PodcastCard from './PodcastCard'

function PodcastList() {
    return (
        <AppContext.Consumer>
            {(value) => {
                if(!value.podcast.list[0]) {
                    //returns null or message if there is no recipe array
                    return 'Recipe selected. Next, search for a podcast!'
                }
                return (
                    <article className='podcast_article'>
                        <ul className='podcast_list grid_list'>
                            {value.podcast.list.map((podcast, i) => {
                                return (
                                    <li key={i} className='grid_item'>
                                        <PodcastCard key={i} podcast={podcast} />
                                    </li>
                                )
                            })}
                        </ul>
                    </article>
                )
            }}
        </AppContext.Consumer>
    )
}

export default PodcastList
