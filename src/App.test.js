import { shallow } from 'enzyme'
import React from 'react'
import App from './App'

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  })
})
