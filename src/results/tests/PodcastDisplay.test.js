import React from 'react'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import PodcastDisplay from '../PodcastDisplay'

describe('PodcastDisplay component', () => {
    it('renders w/o crashing', () => {
        shallow(<BrowserRouter><PodcastDisplay /></BrowserRouter>)
    })
})