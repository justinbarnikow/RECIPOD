import React from 'react'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import RecipePage from '../RecipePage'

describe('RecipePage component', () => {
    it('renders w/o crashing', () => {
        shallow(<BrowserRouter><RecipePage /></BrowserRouter>)
    })
})