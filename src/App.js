import React, { Component} from 'react'
import './App.css'
import gamePage from './components/index'

class App extends Component{
// Set state
state = {
  characters: [],
  score: 0,
  topscore: 0,
  begin: 'Click am image to Begin!'
}

// Fucntion to load game and pull pictures from picture.json
startGame = () => {
  fetch('./picture.json')
    .then(response => response.json)
    .then(results => {
      this.ListeningStateChangedEvent({ characters: results })
    })
    .catch(err => console.log(err))
}

componentDidMount () {
  this.startGame()
}
}
export default App
