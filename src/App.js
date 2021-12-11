import React, { Component } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import config from './config'
import AppContext from './AppContext'
import RecipePage from './recipe/RecipePage'
import PodcastPage from './podcast/PodcastPage'
import ResultsPage from './results/ResultsPage'
import './App.css'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      recipe: {
        searchTerm: '', list: [], recipe: {}, recipeTime: ''
      },
      setRecipeList: this.findRecipes,
      setRecipe: this.setRecipe,

      podcast: 
      { searchTerm: '', list: [], podcast: {} },
      setPodcastList: this.findPodcasts,
      setPodcast: this.setPodcast,

      restartAll: this.restartAll,
      restartToRecipe: this.restartToRecipe
    }
  }

  
  findRecipes = (e) => {
    e.preventDefault();
    const searchTerm = e.target.recipe.value
    const API_KEY = config.RECIPE_API_KEY
    const API_ID = config.RECIPE_API_ID
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=${API_ID}&app_key=${API_KEY}&time=1%2B`
    fetch(url)
      .then(async (data) => {
        if (data.ok) {
          data = await data.json()
          this.setState({
            recipe: {searchTerm: searchTerm, list: data.hits, recipe: {}, recipeTime: 0}
          })
        } else {
          throw new Error(data.status + "Failed")
        }
      }).catch(e => alert('Search failed.', e))
      Array.from(document.querySelectorAll('input')).forEach(
        input => (input.value = "")
      );
  }

  setRecipe = (props) => {
    this.setState({ recipe: {
      searchTerm: this.state.recipe.searchTerm, list: this.state.recipe.list, recipe: props.recipe, recipeTime: props.recipe.totalTime
    }
    })
  }

  findPodcasts = (e) => {
    e.preventDefault();
    const searchTerm = e.target.podcast.value

    function formatPodcastQueryParams(podcastParams) {
      const queryItems = Object.keys(podcastParams).map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(podcastParams[key])}`
        );
      return queryItems.join("&");
    }
    const baseUrl = "https://listen-api.listennotes.com/api/v2/search";
    const API_KEY = config.PODCAST_API_KEY;
    const query = searchTerm;
    const minLength = this.state.recipe.recipeTime - 2 ;
    const maxLength = this.state.recipe.recipeTime + 2;
    const podcastParams = {
      q: query,
      type: 'episode',
      len_min: minLength,
      len_max: maxLength,
      language: 'English',
      safe_mode: 0,
      region: 'us'
      }
    const queryPodcastString = formatPodcastQueryParams(podcastParams);
    const fullUrl = baseUrl + '?' + queryPodcastString;

    const options = {
      headers: new Headers ({
      "X-ListenAPI-Key": API_KEY,
      })}

      Array.from(document.querySelectorAll('input')).forEach(
        input => (input.value = "")
      );    
      
    fetch(fullUrl, options)
        .then(async(data) => {
          if (data.ok) {
            data = await data.json()
            this.setState({ podcast: {
              searchTerm: searchTerm, list: data.results, podcast: this.state.podcast.podcast
            }

            })
          } else {
            throw new Error(data.status + "Failed")
          }
        }).catch(e => alert('Search failed', e))
  }

  setPodcast = (props) => {
    this.setState({ podcast: 
      { searchTerm: this.state.podcast.searchTerm, list: this.state.podcast.list, podcast: props } })
  }

  restartAll = () => {
    this.setState({ recipe:
      { searchTerm: '', list: [], recipe: {}, recipeTime: '' },
      podcast: 
      { searchTerm: '', list: [], podcast: {} }
    })
  }

  restartToRecipe = () => {
    this.setState({ podcast: 
      { searchTerm: '', list: [], podcast: {} }
    })
  }

  render() {
    const contextValue = {
      findRecipes: this.state.setRecipeList,
      recipe: this.state.recipe,
      setRecipe: this.state.setRecipe,

      findPodcasts: this.state.setPodcastList,
      podcast: this.state.podcast,
      setPodcast: this.state.setPodcast,

      restartAll: this.state.restartAll,
      restartToRecipe: this.state.restartToRecipe
    }
    return (
      <AppContext.Provider value={contextValue}>
        <div className='App wrapper'>
          <Link style={{ textDecoration: 'none' }} to='/'><span className='recipod'>Reci<span className='pod'>pod</span></span></Link>
          <Routes>
            <Route path='/' element={<RecipePage />} />
            <Route path='/podcast' element={<PodcastPage />} />
            <Route path='/results' element={<ResultsPage />} />
          </Routes>
        </div>
      </AppContext.Provider>
    )
  }
}
