import React from "react";

class Joke extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-subtitle mb-2 text-muted">{this.props.id}</h5>
          <p className="card-text">{this.props.title}</p>
          <a href="#" className="card-link">Add to favorites</a>
        </div>
      </div>
    );
  }
}

export default Joke;