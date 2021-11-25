import React from "react";
import Joke from "./Joke";

class Jokes extends React.Component {
  constructor() {
    super();
    this.state = {
      jokes: []
    };
  }

  componentDidMount() {
    fetch("http://api.icndb.com/jokes/id/1")
      .then(response => response.json())
      .then(data => {
        this.setState({ jokes: data.value });
      });
  }

  render() {
    console.log(this.state.jokes);
    if(localStorage.length){
        return (
          <div className="row">
            {this.state.jokes.map((j)=>(JSON.parse(localStorage.getItem('favoritesJokes')).find(c=>c.id === j.id)?
                  (<Joke id={j.id} title={j.joke} status="saved"/>): (<Joke id={j.id} title={j.joke} status="notSaved"/>)
            ))}
            </div>
        )
    }
    else if (this.state.jokes.length) {
      return (
        <div className="row">
          {this.state.jokes.map(j => (
            <Joke key={j.id} id={j.id} title={j.joke} />
          ))}
        </div>
      );
    } else {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status"></div>
        </div>
      );
    }
  }
}

export default Jokes;
