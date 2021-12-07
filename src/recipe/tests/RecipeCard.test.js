import React from 'react'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import RecipeCard from '../RecipeCard'

describe('RecipeCard component', () => {
    it('renders w/o crashing', () => {
        shallow(<BrowserRouter><RecipeCard /></BrowserRouter>)
    })
})