import React from 'react'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import RecipeSearchbar from '../RecipeSearchbar'

describe('RecipeSearchbar component', () => {
    it('renders w/o crashing', () => {
        shallow(<BrowserRouter><RecipeSearchbar /></BrowserRouter>)
    })
})