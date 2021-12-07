import React from 'react'
import AppContext from '../AppContext'
import PodcastCard from './PodcastCard'

function PodcastList() {
    return (
        <AppContext.Consumer>
            {(value) => {
                if(!value.podcast.list[0]) {
                    return 'No podcast selected. Search anything, and pick your favorite!'
                }
                return (
                    <article>
                        <ul>
                            {value.podcast.list.map((podcast, i) => {
                                return (
                                    <li key={i}>
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
