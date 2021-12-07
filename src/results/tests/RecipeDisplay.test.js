import React from 'react'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import RecipeDisplay from '../RecipeDisplay'

describe('RecipeDisplay component', () => {
    it('renders w/o crashing', () => {
        shallow(<BrowserRouter><RecipeDisplay /></BrowserRouter>)
    })
})