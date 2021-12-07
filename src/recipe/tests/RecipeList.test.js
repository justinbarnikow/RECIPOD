import React from 'react'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import RecipeList from '../RecipeList'

describe('RecipeList component', () => {
    it('renders w/o crashing', () => {
        shallow(<BrowserRouter><RecipeList /></BrowserRouter>)
    })
})