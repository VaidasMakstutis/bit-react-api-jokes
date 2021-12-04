import React from "react";
import Joke from "./Joke";
import Search from "./Search";

class Favorites extends React.Component {

constructor() {
    super();
    this.state = {
        savedList: [],
        searchList: [],
        search: ""
    };
    this.handleChange = this.handleChange.bind(this);
}

componentDidMount() {
    if(localStorage.length) {
        this.setState((state) => ({
            savedList: state.savedList.concat(JSON.parse(localStorage.getItem('favoritesJokes')))
        }))
    }
}

handleChange(string) {
    this.setState({search: string});
    this.setState(state => ({
        searchList: state.savedList.filter(s =>s.joke.includes(this.state.search))
    }))
}

    render() {
        console.log(this.state.savedList);
        if (this.state.savedList.length) {
        return (
            <div className="favorites">
                <h1>Search</h1>
                <div className="row">
                    <Search handleChange={this.handleChange}/>
                </div>
                <h2>Favorites list</h2>
                <div className="row">
                    {this.state.search.length > 2 ? this.state.searchList.map((j) => <Joke key={j.id} id={j.id} title={j.joke} status={'saved'}/>)
                    : 
                    this.state.savedList.map((j) => <Joke key={j.id} id={j.id} title={j.joke} status={'saved'}/>)}
                </div>
            </div>
        )
        } else {
            return (
                <div className="favorites">
                    <p>Issaugotu filmu nera</p>
                </div>
            )
        }
    }
}

export default Favorites;