import React from "react";
import {Link} from "react-router-dom";
let favoritesList =  [];

class Joke extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToFavorites = this.handleAddToFavorites.bind(this);
    this.handleRemoveFromFavorites = this.handleRemoveFromFavorites.bind(this);
    this.state = {
      status: props.status
    };
  }

  handleAddToFavorites() {
      let obj = {};
      obj["id"] = this.props.id
      obj["joke"] = this.props.title
      obj["categories"] = []
      favoritesList.push(obj)
      localStorage.setItem('favoritesJokes', JSON.stringify(favoritesList))

  }

  handleRemoveFromFavorites() {
    favoritesList = JSON.parse(localStorage.getItem('favoritesJokes'));
    const filteredList = favoritesList.filter(joke => joke.id !== this.props.id);
    localStorage.setItem('favoritesJokes', JSON.stringify(filteredList));
    window.location.reload();
  }

  render() {
    return (
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-subtitle mb-2 text-muted">{this.props.id}</h5>
          <p className="card-text">{this.props.title}</p>
          <p>{this.props.status}</p>
               {this.props.status === "notSaved"? (<Link to="/favorites" className="btn btn-primary"  
               onClick={this.handleAddToFavorites}>Add to favorites</Link>):null}

               {this.props.status === "saved"? <button className="btn btn-danger" 
               onClick={this.handleRemoveFromFavorites}>Remove</button>:null}
        </div>
      </div>
    );
  }
}

export default Joke;