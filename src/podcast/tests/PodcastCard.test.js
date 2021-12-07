import React from 'react'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import PodcastCard from '../PodcastCard'

describe('PodcastCard component', () => {
    it('renders w/o crashing', () => {
        shallow(<BrowserRouter><PodcastCard /></BrowserRouter>)
    })
})