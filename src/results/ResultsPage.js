import React from 'react'
import PodcastDisplay from './PodcastDisplay'
import RecipeDisplay from './RecipeDisplay'

function ResultsPage() {
    return (
        <section className='results_page'>
            <ul className='grid_list'>
                <h2 className='your_recipe'>Your Recipe...</h2>
                <li className='grid_item'><RecipeDisplay /></li>
                <h2>Your Podcast...</h2>
                <li className='grid_item'><PodcastDisplay /></li>
            </ul>
        </section>
    )
}

export default ResultsPage
