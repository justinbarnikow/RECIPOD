import React from 'react'
import PodcastSearchbar from './PodcastSearchbar'
import PodcastList from './PodcastList'

function PodcastPage() {
    return (
        <section className='podcast_page'>
            <PodcastSearchbar />
            <PodcastList />
        </section>
    )
}

export default PodcastPage
