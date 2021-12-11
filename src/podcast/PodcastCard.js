import React from 'react'
import { useNavigate } from 'react-router'
import AppContext from '../AppContext'

function PodcastCard(props) {
    const navigate = useNavigate()
    const image = props.podcast.image
    const timeMinutes = props.podcast.audio_length_sec / 60
    const timeFixed = timeMinutes.toFixed(0)
    let desc = props.podcast.description_original
    if(desc.length > 200) {
        desc = desc.substring(0, 200) 
    }
    return (
        <AppContext.Consumer>
            {(value) => {
                return (
                    <div className='podcast_card'>
                        <a href={props.podcast.listennotes_url} target="_blank" rel="noreferrer">{props.podcast.title_original}</a>
                        <ul className='podcast_info'>
                        <li><a href={props.podcast.link} target="_blank" rel="noreferrer">
                            <img width="150" height="150" src={image} alt='food'/>
                        </a></li>
                        <li>Description: {desc} <a href={props.podcast.listennotes_url} target="_blank" rel="noreferrer">...read more</a></li>
                        <li><a href={props.podcast.audio}>
                            Download Audio
                        </a></li>
                        <li>Listen here: <a href={props.podcast.listennotes_url} target="_blank" rel="noreferrer">here</a></li>
                        <li>Podcast: <a href={props.podcast.link} target="_blank" rel="noreferrer">here</a></li>
                        <li>Time: {timeFixed} minutes</li>
                        <button type='button' onClick={() => {
                            value.setPodcast(props.podcast)
                            navigate('/results')
                        }}>
                            Select
                        </button>
                        </ul>
                    </div>
                )
            }}
        </AppContext.Consumer>
    )
}

export default PodcastCard
