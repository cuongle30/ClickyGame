import React, { Component } from "react";
import Navbar from "./components/Form/Navbar/Navbar";
import Jumbotron from "./components/Form/Jumbotron/Jumbotron"
import Characters from "./components/Form/Characters/Characters"
import pictures from"./pictures.json"
import "./App.css";

class App extends Component {
  // Setting this.state.pictureP to the pictureP json array
  state = {
    pictures,
    clickedcard: [],
    score: 0,
    highscore: 0
  };
//when you click on a card ... the fish is taken out of the array
imageClick = event => {
  const currentCard = event.target.alt;
  const alreadySelected =
    this.state.clickedcard.indexOf(currentCard) > -1;

//if you click on a fish that has already been selected, the game is reset and cards reordered
  if (alreadySelected) {
    this.setState({
      fish: this.state.pictures.sort(function(a, b) {
        return 0.5 - Math.random();
      }),
      clickedcard: [],
      score: 0
    });
      alert("You lose. Try Again!");

//if you click on an available fish, your score is increased and cards reordered
  } else {
    this.setState(
      {
        fish: this.state.pictures.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedcard: this.state.clickedcard.concat(
          currentCard
        ),
        score: this.state.score + 1
      },
//if you get all 12 fish corrent you get a congrats message and the game resets        
      () => {
        if (this.state.score === 12) {
          alert("You Win!");
          this.setState({
            pictures: this.state.pictures.sort(function(a, b) {
              return 0.5 - Math.random();
            }),
            clickedcard: [],
            score: 0
          });
        }
      }
    );
  }
};
  // Map over this.state.pictureP and render a cardCard component for each card object
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.pictures.map(pictures => (
            <Characters
              imageClick={this.imageClick}
              id={pictures.id}
              key={pictures.id}
              image={pictures.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;