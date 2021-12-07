import React from 'react'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import PodcastList from '../PodcastList'

describe('PodcastList component', () => {
    it('renders w/o crashing', () => {
        shallow(<BrowserRouter><PodcastList /></BrowserRouter>)
    })
})