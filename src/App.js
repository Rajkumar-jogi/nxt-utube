import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import './App.css'

import Login from './components/LoginRoute'

import Home from './components/HomeRoute'

import CustomContext from './context/CustomContext'

import TrendingVideosRoute from './components/TrendingVideosRoute'

import GamingRoute from './components/GamingRoute'

import NotFoundRoute from './components/NotFoundRoute'

import SavedVideosRoute from './components/SavedVideosRoute'

import ProtectedRoute from './components/ProtectedRoute'

import VideoItemDetails from './components/VideoItemDetails'

class App extends Component {
  state = {
    isInDarkMode: false,
    activeNavItem: '',
    savedVideosList: [],
  }

  changeToDarkMode = () => {
    this.setState(prevState => ({isInDarkMode: !prevState.isInDarkMode}))
  }

  changeActiveNavItem = clickedItem =>
    this.setState({activeNavItem: clickedItem})

  addToSaveVideosList = videoItem => {
    console.log('Adding video item into savedVideosList')
    // console.log(videoItem);
    this.setState(prevState => {
      const isAlreadySaved = prevState.savedVideosList.find(
        item => item.id === videoItem.id,
      ) // Assuming each videoItem has an 'id' property

      if (isAlreadySaved) {
        // If the videoItem is already in the list, remove it
        return {
          savedVideosList: prevState.savedVideosList.filter(
            item => item.id !== videoItem.id,
          ),
        }
      }
      // If the videoItem is not in the list, add it
      return {
        savedVideosList: [...prevState.savedVideosList, videoItem],
      }
    })
  }

  render() {
    const {isInDarkMode, activeNavItem, savedVideosList} = this.state
    console.log(savedVideosList)
    return (
      <CustomContext.Provider
        value={{
          isInDarkMode,
          changeToDarkMode: this.changeToDarkMode,
          activeNavItem,
          changeActiveNavItem: this.changeActiveNavItem,
          savedVideosList,
          addToSaveVideosList: this.addToSaveVideosList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/trending"
            component={TrendingVideosRoute}
          />
          <ProtectedRoute exact path="/videos/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/videos/savedVideos"
            component={SavedVideosRoute}
          />

          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />

          <Route path="/bad-path" component={NotFoundRoute} />
        </Switch>
      </CustomContext.Provider>
    )
  }
}

export default App
