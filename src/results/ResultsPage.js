import React from 'react'
import AppContext from '../AppContext'
import PodcastDisplay from './PodcastDisplay'
import RecipeDisplay from './RecipeDisplay'

function ResultsPage() {
    console.log()
    return (
        <AppContext.Consumer>
            {(value) => {
                console.log(value)
                if (!value.recipe.recipe.label) {
                    return <div className='no_results grid_item'>No recipe or podcast selected. <br />
                    Return to the home page to get started!</div>
                }
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
            }}
        </AppContext.Consumer>
    )
}

export default ResultsPage
