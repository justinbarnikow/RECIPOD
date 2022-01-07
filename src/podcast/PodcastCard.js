import React from 'react'
import { useNavigate } from 'react-router'
import AppContext from '../AppContext'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

function PodcastCard(props) {
    const navigate = useNavigate()
    const image = props.podcast.image
    const timeMinutes = props.podcast.audio_length_sec / 60
    const timeFixed = timeMinutes.toFixed(0)
    let desc = props.podcast.description_original
    if(desc.length > 400) {
        desc = desc.substring(0, 400) 
    }
    return (
        <AppContext.Consumer>
            {(value) => {
                return (

                        <div className='podcast_card'>
                            <h3 className='card_title'>{props.podcast.title_original}</h3>
                            <ul className='podcast_info_image'>
                                <li><a href={props.podcast.link} target="_blank" rel="noreferrer">
                                    <img width="200" height="200" src={image} alt='food'/>
                                </a></li>
                            </ul>
                            <ul className='podcast_info'>
                                <li>Time: {timeFixed} minutes</li>
                                <li>Listen to it <a href={props.podcast.listennotes_url} target="_blank" rel="noreferrer">here</a></li>
                                <li><a href={props.podcast.link} target="_blank" rel="noreferrer">Podcast Website</a></li>
                                <li><a href={props.podcast.audio}>
                                    Download Audio
                                </a></li>
                            </ul>
                            <span className='button_space'><button className='rounded_button' type='button' onClick={() => {
                                    value.setPodcast(props.podcast)
                                    navigate('/results')
                                }}>
                                    Select
                            </button></span>
                            <Tippy content={
                                <span>
                                    <span>Description:<br /> {desc}</span>
                                </span>}>
                                <span className='button_space'><button className='rounded_button'>Info</button></span>
                            </Tippy>
                        </div>
                )
            }}
        </AppContext.Consumer>
    )
}

export default PodcastCard
