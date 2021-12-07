import React from 'react'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import ResultsPage from '../ResultsPage'

describe('ResultsPage component', () => {
    it('renders w/o crashing', () => {
        shallow(<BrowserRouter><ResultsPage /></BrowserRouter>)
    })
})