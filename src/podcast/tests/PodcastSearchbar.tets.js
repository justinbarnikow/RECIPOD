import React from 'react'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import PodcastSearchbar from '../PodcastSearchbar'

describe('PodcastSearchbar component', () => {
    it('renders w/o crashing', () => {
        shallow(<BrowserRouter><PodcastSearchbar /></BrowserRouter>)
    })
})