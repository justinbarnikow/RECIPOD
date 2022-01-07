import React from 'react'
import AppContext from '../AppContext'
import { useNavigate } from 'react-router'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

function PodcastDisplay() {
    const navigate = useNavigate()
    return (
        <AppContext.Consumer>
            {(value) => {
                if(!value.podcast.podcast.audio) {
                    return null
                } else {
                    console.log(value.podcast.podcast.audio)
                    const image = value.podcast.podcast.image
                    const timeMinutes = value.podcast.podcast.audio_length_sec / 60
                    const timeFixed = timeMinutes.toFixed(0)
                    let desc = value.podcast.podcast.description_original
                    if(desc.length > 200) {
                        desc = desc.substring(0, 200) 
                    }
                return (
                    <article className='dashboard_podcast'>
                        <h3 className='card_title'>{value.podcast.podcast.title_original}</h3>
                        <ul className='dashboard_podcast_image'>
                            <li><a href={value.podcast.podcast.link} target="_blank" rel="noreferrer">
                                <img width="200" height="200" src={image} alt='food'/>
                            </a></li>
                        </ul>
                        <ul className='dashboard_podcast_info'>
                            <li>Time: {timeFixed} minutes</li>
                            <li>Listen to it <a href={value.podcast.podcast.listennotes_url} target="_blank" rel="noreferrer">here</a></li>
                            <li><a href={value.podcast.podcast.link} target="_blank" rel="noreferrer">Podcast Website</a></li>
                            <li><a href={value.podcast.podcast.audio}>
                                Download Audio
                            </a></li>
                        </ul>
                        <span className='button_space'>
                            <button className='rounded_button' type='button' onClick={() => {
                                value.restartToRecipe()
                                navigate('/podcast')
                                }}>Reset
                            </button>
                        </span>
                        <Tippy content={
                            <span>
                                <span>Description:<br /> {desc}</span>
                            </span>}>
                            <span className='button_space'>
                                <button className='rounded_button'>
                                    Info
                                </button>
                            </span>
                        </Tippy>
                    </article>
                )}}}
        </AppContext.Consumer>
    )
}

export default PodcastDisplay
