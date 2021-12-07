import React from 'react'

const AppContext = React.createContext({

findRecipes: () => {},
setRecipe: () => {},
recipe: [],

findPodcasts: () => {},
setPodcast: () => {},
podcast: [],

restartAll: () => {},
restartToRecipe: () => {}

})

export default AppContext