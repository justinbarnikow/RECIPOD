import React from 'react'
import PodcastDisplay from './PodcastDisplay'
import RecipeDisplay from './RecipeDisplay'

function ResultsPage() {
    return (
        <section className='results_page'>
            results
            <RecipeDisplay />
            <PodcastDisplay />
        </section>
    )
}

export default ResultsPage
