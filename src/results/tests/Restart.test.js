import React from 'react'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import Restart from '../Restart'

describe('Restart component', () => {
    it('renders w/o crashing', () => {
        shallow(<BrowserRouter><Restart /></BrowserRouter>)
    })
})